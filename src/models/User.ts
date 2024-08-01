import { randomUUID } from "node:crypto";
import { ArgsType, Field, InputType, Int, ObjectType } from "type-graphql";
import { Column, Entity, Unique } from "typeorm";



@Entity("users")
export class User {
    @Field()
    @Column()
    username: string;

    @Field((_type) => Int)
    @Column({ default: 2 })
    role: number;

    @Field()
    @Column()
    password: string;

    update(username: string, role: number, password?: string) {
        // this.username = Utils.getSlug(username);
        this.username = username;
        this.password = password
            ? password
            : this.password
                ? this.password
                : randomUUID();
        this.role = role > -1 ? role : 0;
    }

    get getable(): User {
        return {
            ...this,
            password: undefined,
        };
    }
}
