import { Field } from "@nestjs/graphql";
import { CommonEntity } from "src/common/entities/entity";
import { UserRole } from "src/common/enums/user.enum";
import { Column } from "typeorm";
import { User } from "./user.entity";

export class TypeORMUser extends CommonEntity {

    @Field(() => String)
    @Column()
    private userId: string;

    @Field(() => String)
    @Column()
    private name: string;

    @Field(() => String)
    @Column()
    private email: string;

    @Field(() => String)
    @Column()
    private password: string;

    @Field(() => UserRole)
    @Column()
    private role: UserRole;

    constructor(user: User) {
        super();

        this.userId = user.getUserId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.role = user.getRole();
    }
}