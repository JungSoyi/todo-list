import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryFindOptions } from 'src/common/repositories/repository-options';
import { User } from '../entities/user.entity';
import { TypeORMUserRepository } from "./typeORM-user.repository";
import { UserMapper } from './user.mapper';
import { UserRepositoryPort } from './user.repository.port';

class UserRepositoryAdapter implements UserRepositoryPort {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: TypeORMUserRepository,
        private readonly userMapper: UserMapper,
    ) { }

    async findUser(by: { userId?: string; email?: string; }, options?: RepositoryFindOptions): Promise<User> {
        return null;
    }
    async addUser(user: User) {
        this.userRepository.save(this.userMapper.mapToTypeORMUser(user));
    }
}