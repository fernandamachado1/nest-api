import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({
        isRequired: true
    })
    name: string;

    @Prop()
    login: string;

    @Prop()
    password: string;

    @Prop({
        default: true
    })
    status: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);
