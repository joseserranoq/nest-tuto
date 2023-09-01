import { TaskStatus } from "../task.entity";
import { IsNotEmpty, IsOptional, IsString, Min, MinLength, IsIn } from 'class-validator'
//nest g 
export class CreateTaskDto{
    @IsString() //para que el titulo sea un string
    @IsNotEmpty() //decorador para que no sea vacio
    @MinLength(3) //decorador para que el titulo tenga minimo 3 caracteres
    title: string

    @IsString()

    description: string
}

export class UpdateTaskDto{
    @IsOptional() //es opcional
    title?: string
    @IsOptional()
    description?: string
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE]) //comprueba que el estado sea uno de los 3
    status?: TaskStatus
}