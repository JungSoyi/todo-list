import { RepositoryFindOptions } from "src/common/repositories/repository-options";
import { User } from "../entities/user.entity";

export interface UserRepositoryPort {
    findUser(by: { userId?: string, email?: string }, options?: RepositoryFindOptions): Promise<User> | null;
    addUser(user: User): Promise<void>;
}