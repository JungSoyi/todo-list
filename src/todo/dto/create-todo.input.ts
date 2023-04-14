import { InputType, Int, Field } from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { User } from 'src/user/entities/user.entity';
import { Todo } from '../entities/todo.entity';

@InputType()
export class CreateTodoInput {
  @Field(() => User)
  owner: User;

  @Field(() => String)
  task: string;

  @Field(() => Boolean, { nullable: true })
  isDone: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  public static newFromTodo(todo: Todo): CreateTodoInput {
    const dto: CreateTodoInput = plainToClass(CreateTodoInput, todo);
    const owner: User = todo.getOwner();

    return dto;
  }

}
