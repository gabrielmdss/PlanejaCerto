import UserEntity, { IUserProps } from "../entity/user";

export interface UserRepository {
    create(userProps: IUserProps): Promise<UserEntity>;
}