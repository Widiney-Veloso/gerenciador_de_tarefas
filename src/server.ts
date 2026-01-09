import dotenv from "dotenv";
dotenv.config();

console.log("🚨 server.ts foi carregado");

import app from "./app";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
