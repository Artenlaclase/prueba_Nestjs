import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';


@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {

    }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }
    
    @Post()
    crateTask(@Body() newTask: CreateTaskDto) {

        return this.tasksService.createTask(newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTasks(id)
    }

    @Patch(":id")
    updateTask(@Param("id") id: string, @Body() updateFields: UpdateTaskDto){
        return this.tasksService.updateTasks(id, updateFields);
    }


}
