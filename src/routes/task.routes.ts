import { Router } from "express";
import { TaskController } from "../controllers/TaskController";
import { validate } from "../middlewares/validate";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../schemas/task.schema";

const routes = Router();
const controller = new TaskController();

routes.get("/tasks", controller.index);

routes.post(
  "/tasks",
  validate(createTaskSchema),
  controller.store
);

routes.put(
  "/tasks/:id",
  validate(updateTaskSchema),
  controller.update
);

routes.delete("/tasks/:id", controller.delete);

export default routes;
