import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CommonEntity } from 'src/common/entities/entity';
import { User } from 'src/user/entities/user.entity';
import { CreateTodoInput } from '../dto/create-todo.input';
import { UpdateTodoInput } from '../dto/update-todo.input';

@ObjectType()
export class Todo extends CommonEntity {

  @Field(() => Int)
  private readonly owner: User;

  @Field(() => String)
  private task: string;

  @Field(() => Boolean)
  private isDone: boolean;

  public getOwner(): User {
    return this.owner;
  }

  public getTask(): string {
    return this.task;
  }

  public getIsDone(): boolean {
    return this.isDone;
  }

  constructor(input: CreateTodoInput) {
    super();
    this.owner = input.owner;
    this.task = input.task;
    this.isDone = false;
  }

  public async edit(input: UpdateTodoInput) {
    const currentDate: Date = new Date();

    if (input.task) {
      this.task = input.task;
      this.updatedAt = currentDate;
    }

    if (input.isDone) {
      this.isDone = input.isDone;
      this.updatedAt = currentDate;
    }
  }

  public async remove() {
    this.deletedAt = new Date();
  }

  public static async new(input: CreateTodoInput): Promise<Todo> {
    const todo: Todo = new Todo(input);
    return todo;
  }

}