import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { UserRole } from "src/common/enums/user.enum";

@InputType()
@ObjectType()
export class CreateUserInputImpl {

    @Field(() => String)
    userId: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => UserRole)
    role: UserRole;

    @Field(() => String)
    password: string;
}