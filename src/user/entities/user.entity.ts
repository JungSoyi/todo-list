import { ObjectType, Field } from '@nestjs/graphql';
import { CommonEntity } from 'src/common/entities/entity';
import { UserRole } from 'src/common/enums/user.enum';
import { UpdateUserInput } from '../dto/update-user.input';
import { CreateUserEntityPayload } from './create-user-entity.payload';

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

  constructor(input: CreateUserEntityPayload) {
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

  public async edit(input: UpdateUserInput) {
    const currentDate: Date = new Date();

    if (input.password) {
      this.password = input.password;
      this.updatedAt = currentDate;
    }
  }

  public async remove() {
    this.deletedAt = new Date();
  }

  public static async new(input: CreateUserEntityPayload): Promise<User> {
    const user: User = new User(input);
    return user;
  }

}
