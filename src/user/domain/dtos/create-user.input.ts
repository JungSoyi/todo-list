import { UserRole } from "src/common/enums/user.enum";

export interface CreateUserInput {
    userId: string;
    name: string;
    email: string;
    role: UserRole;
    password: string;
}