import { Injectable,Delete, Param } from '@nestjs/common';
import { Task,TaskStatus } from './task.entity';
import {v4} from 'uuid'
import { UpdateTaskDto } from './dto/task.dto';
//npm i @types/uuid -D
//nest g service tasks --no-spec
@Injectable() //podemos reutilizarla 
export class TasksService {
    private tasks: Task[] = [{
        id: '1',
        title: 'first tasks',
        description: 'some tasks in the descrip',
        status: TaskStatus.PENDING,
    }]
    getAllTasks(){
        return this.tasks
    }
    createTask(title: string,description: string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        //this.tasks.push()
        this.tasks = [...this.tasks,task]
        return task
    }
    getTaskById(id: string){
        return this.tasks.find(task => task.id === id)
    }

    updateTask(id: string, updateFields: UpdateTaskDto): Task{
        const task = this.getTaskById(id)
        //se combina por si se envia titulo o descripcion por lo cual se utiliza assign
        const newTask = Object.assign(task,updateFields)
        this.tasks = this.tasks.map(task => (task.id === id ? newTask : task))
        return newTask
    }

    deleteTask(id : string ){
       this.tasks =  this.tasks.filter(task => task.id !== id)
    }
}
