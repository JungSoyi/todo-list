import { InputType, Field } from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { UserRole } from 'src/common/enums/user.enum';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput {

  @Field(() => String)
  userId: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => UserRole)
  role: UserRole;

  @Field(() => Date)
  createdAt: number;

  @Field(() => Date)
  updatedAt: number;

  public static newFromUser(user: User): CreateUserInput {
    const dto: CreateUserInput = plainToClass(CreateUserInput, user);

    dto.createdAt = user.getCreatedAt().getTime();
    dto.updatedAt = user.getUpdatedAt().getTime();

    return dto;
  }
}
