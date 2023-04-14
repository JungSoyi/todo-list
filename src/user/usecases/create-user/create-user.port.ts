import { UserRole } from "src/common/enums/user.enum";

export interface CreateUserPort {
    userId: string;
    name: string;
    email: string;
    role: UserRole;
    password: string;
}