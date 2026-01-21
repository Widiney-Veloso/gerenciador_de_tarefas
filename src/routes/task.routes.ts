import { Router } from "express";
import { TaskController } from "../controllers/TaskController";

const router = Router();
const controller = new TaskController();

router.post("/tasks", controller.create);
router.get("/tasks", controller.findAll);
router.put("/tasks/:id", controller.update);
router.delete("/tasks/:id", controller.delete);

export default router;
