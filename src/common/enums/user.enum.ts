import { registerEnumType } from "@nestjs/graphql";

export enum UserRole {
    ADMIN = 'ADMIN',
    GUEST = 'GUEST'
}

registerEnumType(UserRole, {
    name: 'UserRole'
})