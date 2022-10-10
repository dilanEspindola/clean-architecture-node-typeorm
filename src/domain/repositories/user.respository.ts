import { UserEntity } from "../entities";

export interface UserRespository {
  findAll: () => Promise<UserEntity[]>;
  findOneById: (id: number) => Promise<UserEntity>;
  createUser: (user: UserEntity) => Promise<UserEntity>;
  updateUser: (id: number) => Promise<UserEntity>;
  deleteUser: (id: number) => Promise<string>;
}
