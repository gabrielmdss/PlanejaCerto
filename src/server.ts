import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import routes from "./application/routes/routes";

const PORT: string | undefined = process.env.SERVER_PORT;
const server: Express = express();

server.use(express.json());
server.use(cors());

server.use("/api/v1", routes);
server.get("/api/v1", (req, res) => {
  res.send("API v1");
});

server.listen(PORT, () => {
  console.info(`Servidor rodando na porta - ${PORT}`);
});
