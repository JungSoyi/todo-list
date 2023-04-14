import { Code } from "src/common/exception/error-code";
import { Exception } from "src/common/exception/exception";
import { CreateUserInput } from "src/user/dto/create-user.input";
import { User } from "src/user/entities/user.entity";
import { UserRepositoryPort } from "src/user/repositories/user.repository.port";
import { CreateUserPort } from "./create-user.port";
import { CreateUserUsecase } from "./create-user.usecase";

export class CreateUserService implements CreateUserUsecase<CreateUserPort, CreateUserInput>{

    constructor(
        private readonly userRepository: UserRepositoryPort,
    ) { }

    public async execute(payload: CreateUserPort): Promise<CreateUserInput> {

        const isUserExist = !! await this.userRepository.findUser({ email: payload.email });
        if (!isUserExist) {
            Exception.new({ code: Code.NOT_FOUND_ERROR, overrideMessage: 'This Email is already using now' })
        }

        const user: User = await User.new({
            userId: payload.userId,
            name: payload.name,
            email: payload.email,
            role: payload.role,
            password: payload.password,
        });

        await this.userRepository.addUser(user);
        return CreateUserInput.newFromUser(user);
    }

}