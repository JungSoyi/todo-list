import { UserRole } from 'src/common/enums/user.enum';

export interface CreateUserDataInput {

  userId: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: number;
  updatedAt: number;
}
