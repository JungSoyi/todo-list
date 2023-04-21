import { InputType, Field } from '@nestjs/graphql';
import { UserRole } from 'src/common/enums/user.enum';
import { CreateUserDataInput } from 'src/user/application/dtos/create-user-data.input';

@InputType()
export class CreateUserDataInputImpl implements CreateUserDataInput {

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
}
