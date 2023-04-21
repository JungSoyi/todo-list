// import { InputType, Field } from '@nestjs/graphql';
// import { plainToClass } from 'class-transformer';
// import { User } from 'src/user/entities/user.entity';
// import { Todo } from '../entities/todo.entity';

// @InputType()
// export class CreateTodoInput {
//   @Field(() => User)
//   owner: User;

//   @Field(() => String)
//   task: string;

//   @Field(() => Boolean, { nullable: true })
//   isDone: boolean;

//   @Field(() => Date)
//   createdAt: number;

//   @Field(() => Date)
//   updatedAt: number;

//   public static newFromTodo(todo: Todo): CreateTodoInput {
//     const dto: CreateTodoInput = plainToClass(CreateTodoInput, todo);

//     dto.owner = todo.getOwner();

//     dto.createdAt = todo.getCreatedAt().getTime();
//     dto.updatedAt = todo.getUpdatedAt().getTime();

//     return dto;
//   }

// }
