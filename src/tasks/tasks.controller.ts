import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';



@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {

    }

    @Get()
    helloworld() {
        return this.tasksService.getAllTasks();
    }
    @Post()
    crateTask(@Body() newTasks: any) {
        console.log(newTasks);
        return 'guardando'
       // this.tasksService.createTasks();
    }

}
