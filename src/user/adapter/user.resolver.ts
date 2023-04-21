import { Resolver, Mutation, Args, Int, Query } from '@nestjs/graphql';
import { User } from '../domain/entities/user.entity';
import { CreateUserUsecase } from '../domain/usecase/create-user.usecase';
import { Inject } from '@nestjs/common';
import { CreateUserInputImpl } from './dtos/create-user-graphql-impl.input';
import { GraphqlCreateUserOutputDto } from './dtos/graphql-create-user.output';

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject('CreateUserUsecase')
    private readonly createUserUsecase: CreateUserUsecase,
  ) { }

  @Mutation(() => GraphqlCreateUserOutputDto)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInputImpl) {
    const userResponse = new GraphqlCreateUserOutputDto(await this.createUserUsecase.execute(createUserInput));
    return userResponse;
  }

  @Query(() => Int)
  getUser() {
    return 1;
  }


}
