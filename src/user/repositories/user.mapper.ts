import { TypeORMUser } from "../entities/user-typeorm.entity";
import { User } from "../entities/user.entity";

export class UserMapper {
    mapToTypeORMUser(user: User) {
        return new TypeORMUser(
            user
        );
    }
}