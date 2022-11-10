import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({
        isRequired: true
    })
    item: string;

    @Prop()
    checked: boolean;

    @Prop()
    checkedDate: string;

    @Prop()
    user_id: string;

}

export const TaskSchema = SchemaFactory.createForClass(Task);
