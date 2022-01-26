import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  Res,
  Patch,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('task')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string): Promise<Task> {
    return this.taskService.getTaskById(taskId);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Patch(':taskId')
  updateTask(@Req() req, @Param('taskId') taskId): string {
    this.taskService.updateTask(taskId, req.body);

    return `task updated, task id:${taskId}}`;
  }

  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId): string {
    this.taskService.deleteTask(taskId);
    return `task deleted correctly, task id: ${taskId}`;
  }
}
