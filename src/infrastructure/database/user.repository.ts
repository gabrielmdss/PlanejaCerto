import UserEntity, { IUserProps } from "../../domain/entity/user";
import { UserRepository } from "../../domain/repository/user.repository";
import conn from "../config/database.config";

export default class UserPostgresRepository implements UserRepository {
  async create(userProps: IUserProps): Promise<UserEntity> {
    try {
      await conn.query("BEGIN");
      const usuarioCriado = await conn.query(
        `
                INSERT INTO USUARIOS (
                nome,
                email,
                senha,
                rendamensal,
                poupancamensal
                ) VALUES (
                 $1, $2, $3, $4, $5
                 ) RETURNING *`,
        [
          userProps.nome,
          userProps.email,
          userProps.senha,
          userProps.rendamensal,
          userProps.poupancamensal,
        ]
      );

      await conn.query("COMMIT");

      return new UserEntity(usuarioCriado.rows[0]);
    } catch (error) {
        await conn.query("ROLLBACK");
        console.error(error);
        throw new Error("Error creating user");
    }
  }
}
