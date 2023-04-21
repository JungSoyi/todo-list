import { NotFoundException } from "@nestjs/common";
import { DataService } from "src/common/database/data-service";
import { User } from "../../domain/entities/user.entity";

export class UserInMemoryDataService implements DataService {
    private readonly users = [];

    create(data: any) {
        const user = new User(data);
        this.users.push(user);

        return user;
    }

    get(email: string) {
        const user = this.users[email];
        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }
}