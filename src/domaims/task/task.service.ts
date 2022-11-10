import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDTO } from '../user/dto/createUserDTO.dto';
import { CreateTaskDto } from './dto/createTaskDTO.dto';
import { Task, TaskDocument } from './task.model';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) { }

  async create(createTask: CreateTaskDto) {
    return this.taskModel.create(createTask);

  }

  async findAll() {
    return await this.taskModel.find({
      user_id: "636cfa4da58abf056d5ddd48"
    }).exec();
  }

  async findOne(id: string) {
    return await this.taskModel.findOne({ _id: id })
  }

  update(id: string, task: CreateTaskDto) {
    return this.taskModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: task,
      },
      {
        new: true,
      }
    );
  }

  remove(id: string) {
    return this.taskModel.deleteOne({ _id: id });
  }

  checked(id: string) {
    return this.taskModel.findById (id)
  }
}
