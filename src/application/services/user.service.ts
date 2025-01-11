import { UserRepository } from "../../domain/repository/user.repository";
import UserEntity, { IUserProps } from "../../domain/entity/user";

export default class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userProps: IUserProps): Promise<UserEntity> {
    const user = await this.userRepository.create(userProps);
    return user;
  }
}
