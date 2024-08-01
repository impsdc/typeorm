import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany } from "typeorm";

import { Chapter } from "./Chapter";

@Entity("team_members")
export class TeamMember {
    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    role: string;

    @Field()
    @Column()
    image: string;

    @Field()
    @Column({ nullable: true })
    pref: string;

    @Field()
    @Column({ nullable: true })
    type: string;

    @Field()
    @Column({ nullable: true })
    twitter: string;

    @Field()
    @Column({ nullable: true })
    instagram: string;

    @Field()
    @Column({ nullable: true })
    discord: string;

    @Field((type) => Chapter)
    @ManyToMany(
        (type) => TeamMember,
        (teamMember) => teamMember.chapters,
    )
    chapters: Chapter[];
}
