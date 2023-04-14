import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { CreateUserUsecase } from './usecases/create-user/create-user.usecase';
import { CreateUserPort } from './usecases/create-user/create-user.port';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly createUserUsecase: CreateUserUsecase<CreateUserPort, CreateUserInput>) { }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserPort: CreateUserPort) {
    return this.createUserUsecase.execute(createUserPort);
  }


}
