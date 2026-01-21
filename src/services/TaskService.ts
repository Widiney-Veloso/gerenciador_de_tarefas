import { Task } from "../models/Task";

export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  create(title: string, description: string): Task {
    const task: Task = {
      id: this.nextId++,
      title,
      description,
      completed: false,
    };

    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  update(id: number, completed: boolean): Task | null {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return null;

    task.completed = completed;
    return task;
  }

  delete(id: number): boolean {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) return false;

    this.tasks.splice(index, 1);
    return true;
  }
}
