import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export class TaskController {
  static index(req: Request, res: Response) {
    const tasks = TaskService.getAll();
    return res.json(tasks);
  }

  static store(req: Request, res: Response) {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const task = TaskService.create(title, description);
    return res.status(201).json(task);
  }
}
