import { ObjectType, Field } from '@nestjs/graphql';
import { CommonEntity } from 'src/common/entities/entity';
import { UserRole } from 'src/common/enums/user.enum';
import { User } from 'src/user/domain/entities/user.entity';

@ObjectType()
export class GraphqlUser extends CommonEntity {

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

  constructor(input: User) {
    super();

    this.userId = input.getUserId();
    this.name = input.getName();
    this.email = input.getEmail();
    this.role = input.getRole();
    this.password = input.getPassword();

  }

}
