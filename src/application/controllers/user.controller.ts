import { Request, Response } from "express";
import { IUserProps } from "../../domain/entity/user";
import UserService from "../services/user.service";

export default class UserController {
    constructor(private readonly userService: UserService){}

    async create(request: Request, response: Response){
        const input: IUserProps = request.body;
        
        const novoUsuario = await this.userService.createUser(input);
        return response.json(novoUsuario)
    }
}