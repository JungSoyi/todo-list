import { User } from "../entities/user.entity";

export class CreateUserOutputDto {
    success: boolean;

    createdUser: User;
}