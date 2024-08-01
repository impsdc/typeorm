import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";

@Entity("news")
export class New {
    @Field()
    @Column()
    topic: string;

    @Field()
    @Column({ type: "text" })
    text: string;
}
