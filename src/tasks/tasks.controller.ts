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
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

@Controller('task')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get all the Tasks',
  })
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  @ApiResponse({
    status: 200,
    description: 'Get a Task by Task Id',
  })
  getTask(@Param('taskId') taskId: string): Promise<Task> {
    return this.taskService.getTaskById(taskId);
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Create a new task',
  })
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Patch(':taskId')
  @ApiResponse({
    status: 200,
    description: 'Find and update a task, require Id and Task',
  })
  updateTask(@Req() req, @Param('taskId') taskId): string {
    this.taskService.updateTask(taskId, req.body);

    return `task updated, task id:${taskId}}`;
  }

  @Delete(':taskId')
  @ApiResponse({
    status: 200,
    description: 'Delete a task',
  })
  deleteTask(@Param('taskId') taskId): string {
    this.taskService.deleteTask(taskId);
    return `task deleted correctly, task id: ${taskId}`;
  }
}
