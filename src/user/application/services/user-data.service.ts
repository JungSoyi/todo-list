import { DataService } from "src/common/database/data-service";

export class UserDataService implements DataService {
    create(data: any) {
        return true;
    }
    get(data: any) {
        return true;
    }
}