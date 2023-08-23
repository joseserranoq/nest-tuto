import { Body,Controller, Delete, Get,Param,Patch,Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}
    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks();
    }
    //el @body() es un decorador para obtener los datos
    @Post()
    createTask(@Body() newTask: CreateTaskDto){
        return this.taskService.createTask(newTask.title,newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id : string){
        this.taskService.deleteTask(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id : string,@Body() updateFields: 
    UpdateTaskDto){
        return this.taskService.updateTask(id,updateFields)
    }
}