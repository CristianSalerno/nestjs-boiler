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

  @Put(':taskId')
  updatetTask(@Param('taskId') taskId): Promise<Task> {
    return this.taskService.updateTask(taskId);
  }

  @Delete(':taskId')
  deleteTask(@Body() task: CreateTaskDto, @Param('taskId') taskId): string {
    return `task ${taskId} deleted`;
  }
}
