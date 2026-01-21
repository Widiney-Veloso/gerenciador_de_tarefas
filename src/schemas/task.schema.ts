import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title cannot be empty"),

  description: z
    .string()
    .optional(),
});

export const updateTaskSchema = z.object({
  completed: z.boolean(),
});
