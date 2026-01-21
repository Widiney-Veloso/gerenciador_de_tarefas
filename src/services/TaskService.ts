import { pool } from "../database/connection";
import { Task } from "../models/Task";

export class TaskService {
  async create(title: string, description?: string): Promise<Task> {
    const result = await pool.query(
      `INSERT INTO tasks (title, description)
       VALUES ($1, $2)
       RETURNING *`,
      [title, description]
    );

    return result.rows[0];
  }

  async findAll(): Promise<Task[]> {
    const result = await pool.query(
      "SELECT * FROM tasks ORDER BY id"
    );

    return result.rows;
  }

  async update(id: number, completed: boolean): Promise<Task | null> {
    const result = await pool.query(
      `UPDATE tasks
       SET completed = $1
       WHERE id = $2
       RETURNING *`,
      [completed, id]
    );

    if (result.rowCount === 0) return null;
    return result.rows[0];
  }

  async delete(id: number): Promise<boolean> {
    const result = await pool.query(
      "DELETE FROM tasks WHERE id = $1",
      [id]
    );

    return result.rowCount! > 0;
  }
}
