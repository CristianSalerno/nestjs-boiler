import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    type: String,
    description: 'Task Title',
  })
  title: string;
  @ApiProperty({
    type: String,
    description: 'Task Description',
  })
  description: string;
  @ApiProperty({
    type: Boolean,
    description: 'Task is Done or not',
  })
  done: boolean;
}
