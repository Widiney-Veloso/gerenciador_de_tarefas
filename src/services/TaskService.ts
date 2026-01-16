import { Task } from "../models/Task";

let tasks: Task[] = [];

export class TaskService {
  static getAll(): Task[] {
    return tasks;
  }

  static create(title: string, description?: string): Task {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };

    tasks.push(newTask);
    return newTask;
  }
}
