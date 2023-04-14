import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsDate, IsNumber } from "class-validator";
import { Entity } from "typeorm";

@ObjectType()
@Entity()
export class CommonEntity {

    @IsNumber()
    @Field(() => Int)
    protected id: number;

    @IsDate()
    @Field(() => Date)
    protected createdAt: Date;

    @IsDate()
    @Field(() => Date)
    protected updatedAt: Date;

    @IsDate()
    @Field(() => Date)
    protected deletedAt: Date;

    public getId(): number {
        return this.id;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public getDeletedAt(): Date {
        return this.deletedAt;
    }
}
