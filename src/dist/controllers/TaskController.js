"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const TaskService_1 = require("../services/TaskService");
const service = new TaskService_1.TaskService();
class TaskController {
    create(req, res) {
        const { title, description } = req.body;
        const task = service.create(title, description);
        return res.status(201).json(task);
    }
    findAll(req, res) {
        return res.json(service.findAll());
    }
    update(req, res) {
        const id = Number(req.params.id);
        const { completed } = req.body;
        const task = service.update(id, completed);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.json(task);
    }
    delete(req, res) {
        const id = Number(req.params.id);
        const success = service.delete(id);
        if (!success) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(204).send();
    }
}
exports.TaskController = TaskController;
