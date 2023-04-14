import { RepositoryFindOptions } from "src/common/repositories/repository-options";
import { Repository } from "typeorm";
import { TypeORMUser } from "../entities/user-typeorm.entity";
import { User } from "../entities/user.entity";

export interface TypeORMUserRepository extends Repository<TypeORMUser> {
    this: Repository<TypeORMUser>
    findUser(by: { userId?: string, email?: string }, options?: RepositoryFindOptions): Promise<User> | null;
    addUser(user: User): Promise<void>;
}

type CustomTypeORMUserRepository = Partial<TypeORMUserRepository>;

export const CustomTypeORMUserRepositoryMethods: CustomTypeORMUserRepository = {
    async findUser(by: { userId?: string, email?: string }, options?: RepositoryFindOptions): Promise<User> | null {
        return null;
    },
    async addUser(user: User): Promise<void> {
        await this.save(user);
    }
}