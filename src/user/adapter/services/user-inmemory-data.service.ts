import { DataService } from "src/common/database/data-service";
import { User } from "../../domain/entities/user.entity";

export class UserInMemoryDataService implements DataService {
    private readonly users = [];

    create(data: any) {
        const user = new User(data);
        this.users.push(user);

        return user;
    }

    async get(input: string) {
        if (input == 'email') {
            const user = await this.users.find(user => user.email == input);
            if (!user) {
                return false;
            }
            return user;
        }
        if (input == 'userId') {
            const user = await this.users.find(user => user.userId == input);
            if (!user) {
                return false;
            }
            return user;
        }

    }
}