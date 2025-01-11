import { Router } from "express";
import UserPostgresRepository from "../../infrastructure/database/user.repository";
import UserService from "../services/user.service";
import UserController from "../controllers/user.controller";

const userRoutes = Router();
const userRepository = new UserPostgresRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.post("/registrar", (request, response) => {
  userController.create(request, response);
});

userRoutes.post("/login", (request, response) => {});
userRoutes.get("/perfil", (request, response) => {});
userRoutes.put("/perfil", (request, response) => {});
userRoutes.delete("/perfil", (request, response) => {});

export default userRoutes;
