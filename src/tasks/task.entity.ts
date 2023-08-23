//En base en las entidades podemos generar nuestra bases de datos
// generando las tablas y sus relaciones mediante ORM
export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',

}
export class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}
