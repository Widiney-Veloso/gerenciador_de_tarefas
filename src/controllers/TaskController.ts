import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

const service = new TaskService();

export class TaskController {
  create(req: Request, res: Response) {
    const { title, description } = req.body;
    const task = service.create(title, description);
    return res.status(201).json(task);
  }

  findAll(req: Request, res: Response) {
    return res.json(service.findAll());
  }

  update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { completed } = req.body;

    const task = service.update(id, completed);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.json(task);
  }

  delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const success = service.delete(id);

    if (!success) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(204).send();
  }
}
