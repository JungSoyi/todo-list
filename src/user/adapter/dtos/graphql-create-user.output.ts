import { Field, ObjectType } from "@nestjs/graphql";
import { CreateUserOutputDto } from "src/user/domain/dtos/create-user.output";
import { User } from "src/user/domain/entities/user.entity";

@ObjectType()
export class GraphqlCreateUserOutputDto {
    @Field(() => Boolean)
    success: boolean;

    @Field(() => User)
    createdUser: User;

    constructor(createUserOutputDto: CreateUserOutputDto) {
        this.success = createUserOutputDto.success;
        this.createdUser = createUserOutputDto.createdUser;
    }
}