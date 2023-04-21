import { ObjectType, Field } from '@nestjs/graphql';
import { CommonEntity } from 'src/common/entities/entity';
import { UserRole } from 'src/common/enums/user.enum';
import { CreateUserInput } from '../dtos/create-user.input';

@ObjectType()
export class User extends CommonEntity {

  @Field(() => String)
  private userId: string;

  @Field(() => String)
  private name: string;

  @Field(() => String)
  private email: string;

  @Field(() => String)
  private password: string;

  @Field(() => UserRole)
  private role: UserRole;

  constructor(input: CreateUserInput) {
    super();

    this.userId = input.userId;
    this.name = input.name;
    this.email = input.email;
    this.role = input.role;
    this.password = input.password;

  }

  public getUserId() {
    return this.userId;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getRole() {
    return this.role;
  }

  public getPassword() {
    return this.password;
  }

}
