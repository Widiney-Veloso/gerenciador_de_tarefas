import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    message: "API is running 🚀"
  });
});

export default router;
