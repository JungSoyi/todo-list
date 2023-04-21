import { Field, ObjectType } from "@nestjs/graphql";
import { CreateUserOutputDto } from "src/user/domain/dtos/create-user.output";
import { User } from "src/user/domain/entities/user.entity";
import { GraphqlUser } from "../entities/graphql-user.entity";

@ObjectType()
export class GraphqlCreateUserOutputDto {
    @Field(() => Boolean)
    success: boolean;

    @Field(() => GraphqlUser)
    createdUser: GraphqlUser;

    constructor(createUserOutputDto: CreateUserOutputDto) {
        this.success = createUserOutputDto.success;
        this.createdUser = new GraphqlUser(createUserOutputDto.createdUser)
    }
}