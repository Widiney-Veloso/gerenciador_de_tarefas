import { Router } from "express";
import { TaskController } from "../controllers/TaskController";

const routes = Router();
const controller = new TaskController();

routes.get("/tasks", controller.index);
routes.post("/tasks", controller.store);
routes.put("/tasks/:id", controller.update);
routes.delete("/tasks/:id", controller.delete);

export default routes;
