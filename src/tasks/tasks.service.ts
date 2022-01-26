import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getTasks() {
    return await this.taskModel.find();
  }

  async getTaskById(id: string) {
    return await this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    await newTask.save();

    return newTask;
  }

  async updateTask(id: string, update: Task) {
    return await this.taskModel.findByIdAndUpdate(id, update);
  }

  async deleteTask(id: string) {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
