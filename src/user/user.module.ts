import { Module } from '@nestjs/common';
import { UserResolver } from './adapter/user.resolver';
import { CreateUserService } from './application/services/create-user.service';
import { UserInMemoryDataService } from './adapter/services/user-inmemory-data.service';
import { CreateUserDataInputImpl } from './adapter/dtos/create-user-data-impl.input';
import { CreateUserInputImpl } from './adapter/dtos/create-user-graphql-impl.input';

@Module({
  providers: [UserResolver,
    {
      provide: 'CreateUserUsecase', useClass: CreateUserService,
    },
    {
      provide: 'UserDataService', useClass: UserInMemoryDataService,
    },
    {
      provide: 'CreateUserDataInput', useClass: CreateUserDataInputImpl,
    },
    {
      provide: 'CreateUserInput', useClass: CreateUserInputImpl,
    }
  ]
})
export class UserModule { }
