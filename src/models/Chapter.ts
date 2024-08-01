import { ArgsType, Field, InputType, Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, Unique } from "typeorm";
import type { Relation } from "typeorm";
import { Lang } from "./Lang";
import { Manga } from "./Manga";
import { TeamMember } from "./TeamMember";

@Entity("chapters")
export class Chapter {
    @Field()
    @Column({ nullable: true })
    name: string;

    @Field()
    @Column()
    number: number;

    @Field()
    @Column()
    thumb: string;

    @Field()
    @Column({ default: true })
    published: boolean;

    @Field()
    @Column("text", { nullable: true })
    keywords: string;

    @Field()
    @Column({ default: 0 })
    likes: number;

    @Field(() => Chapter)
    nextChapter: Relation<Chapter | null>;


    @Field(() => Manga)
    @ManyToOne(
        () => Manga,
        (manga) => manga.chapters,
    )
    manga: Relation<Manga>;

    @Field(() => Lang)
    @ManyToOne(
        () => Lang,
        (lang) => lang.chapters,
        { nullable: true },
    )
    lang: Relation<Lang>;

    @Field(() => [TeamMember])
    @ManyToMany(
        () => TeamMember,
        (teamMember) => teamMember.chapters,
    )
    @JoinTable()
    members: Relation<TeamMember[]>;
}
