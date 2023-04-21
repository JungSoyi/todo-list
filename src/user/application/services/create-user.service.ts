import { Inject, Injectable } from "@nestjs/common";
import { DataService } from "src/common/database/data-service";
import { CreateUserOutputDto } from "src/user/domain/dtos/create-user.output";
import { User } from "src/user/domain/entities/user.entity";
import { CreateUserInput } from "../../domain/dtos/create-user.input";
import { CreateUserUsecase } from "../../domain/usecase/create-user.usecase";

@Injectable()
export class CreateUserService implements CreateUserUsecase {

    constructor(
        @Inject('UserDataService')
        private readonly dataService: DataService,
    ) {

    }

    public async execute(payload: CreateUserInput) {

        /**
         * @todo 이메일 검증하기
         */
        // const validEmail = await this.validEmail(payload.email);

        /**
         * @todo 유저 정보 검증하기
         */
        // const validInputData = await this.validUserId(payload.userId);

        /**
         * 유저 엔티티 만들기
         */
        const user = await new User({
            name: payload.name,
            email: payload.email,
            password: payload.password,
            role: payload.role,
            userId: payload.userId,
        });

        /**
         * 데이터로 저장하기
         */
        await this.dataService.create(user);

        /**
         * 아웃풋으로 내보내기
         */
        const createdUser = new CreateUserOutputDto();
        createdUser.success = true;
        createdUser.createdUser = user;
        return createdUser;
    }

    async validEmail(email: string) {
        const userId = await this.dataService.get(email);
        if (userId) {
            throw new Error('user exist');
        }
        return true;
    }


    async validUserId(userId: string) {
        const newUserId = await this.dataService.get(userId);
        if (newUserId) {
            throw new Error('user exist');
        }
        return true;
    }
}