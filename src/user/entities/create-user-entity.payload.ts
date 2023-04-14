import { UserRole } from "src/common/enums/user.enum";

export type CreateUserEntityPayload = {
    userId: string;
    name: string;
    email: string;
    role: UserRole;
    password: string;
}