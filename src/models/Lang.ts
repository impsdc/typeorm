import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany } from "typeorm";

import { Chapter } from "./Chapter";

@Entity("langs")
export class Lang {
    @Field()
    @Column({ nullable: false })
    name: string;

    @Field()
    @Column({ nullable: false })
    shortName: string;

    @Field((type) => Chapter)
    @OneToMany(
        (type) => Chapter,
        (chapter) => chapter.lang,
    )
    chapters: Chapter[];
}
