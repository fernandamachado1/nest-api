import { Body, Controller, Get, HttpException, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { createUserDTO } from "./dto/createUserDTO.dto";
import { loginDTO } from "./dto/loginDTO.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createUserBody: createUserDTO): string {
        return this.userService.create(createUserBody);
    }

    @Post("/login")
    async login(@Body() loginBody: loginDTO) {
        let loginResponse = await this.userService.login(loginBody);

        if (loginResponse.error) {
            throw new HttpException(loginResponse.msgError!, HttpStatus.NOT_FOUND);
        }
        return loginResponse.jwt;
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    search(): string {
        return this.userService.search();
    }
}