import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export class TaskController {
  private service = new TaskService();

  index = async (req: Request, res: Response) => {
    const tasks = await this.service.findAll();
    return res.json(tasks);
  };

  store = async (req: Request, res: Response) => {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        error: "Title is required",
      });
    }

    const task = await this.service.create(title, description);
    return res.status(201).json(task);
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { completed } = req.body;

    const task = await this.service.update(id, completed);

    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    return res.json(task);
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const deleted = await this.service.delete(id);

    if (!deleted) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    return res.status(204).send();
  };
}
