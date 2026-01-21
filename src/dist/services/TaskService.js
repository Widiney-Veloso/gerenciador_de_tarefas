"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
class TaskService {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    create(title, description) {
        const task = {
            id: this.nextId++,
            title,
            description,
            completed: false,
        };
        this.tasks.push(task);
        return task;
    }
    findAll() {
        return this.tasks;
    }
    update(id, completed) {
        const task = this.tasks.find(t => t.id === id);
        if (!task)
            return null;
        task.completed = completed;
        return task;
    }
    delete(id) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index === -1)
            return false;
        this.tasks.splice(index, 1);
        return true;
    }
}
exports.TaskService = TaskService;
