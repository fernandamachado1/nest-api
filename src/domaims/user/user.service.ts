import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createUserDTO } from "./dto/createUserDTO.dto";
import { loginDTO } from "./dto/loginDTO.dto";
import { loginResponseDTO } from "./dto/loginResponseDTO.dto";
import { User, UserDocument } from "./user.model";
var jwt = require('jsonwebtoken');



@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    create(createUser: createUserDTO): any {
        return this.userModel.create(createUser);
    }

    search(): any {
        return this.userModel.find({});
    }

    findByLogin(login: string) : any {
        return this.userModel.findOne({
            login: login,
            status: true
        });
    }
 
    async login(loginBody: loginDTO): Promise<loginResponseDTO> {
        let user = await this.userModel.findOne({
            login: loginBody.login,
            password: loginBody.password,
            status: true
        });

        if (!user) {
            return {
                jwt: "",
                error: true,
                msgError: "Usuario não encontrado!"
            }
        }

        var token = jwt.sign({
            _id: String(user._id),
            name: user.name,
        }, 'secretKey');

        return {
            jwt: token,
            error: false
        };
    }
}
