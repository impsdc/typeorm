import { ArgsType, Field, InputType, Int, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, Unique } from "typeorm";
import type { Relation } from "typeorm";
import { Author, AuthorInput } from "./Author";
import { Chapter } from "./Chapter";
import { Notif } from "./Notif";

@Entity("mangas")
export class Manga {
    @Field()
    @Column()
    thumb: string;

    @Field()
    @Column({ default: true })
    published: boolean;

    @Field()
    @Column({ default: 9999 })
    position: number;

    @Field()
    @Column("text", { nullable: true })
    story: string;

    @Field()
    @Column()
    slug: string;

    @Field()
    @Column("text", { nullable: true })
    keywords: string;

    @Field()
    @Column({ nullable: true })
    status: string;

    @Field()
    @Column({ nullable: true })
    statusProgression: number;

    @Field()
    @Column()
    name: string;

    // @ManyToMany(() => Notif)
    // notifs: Relation<Notif[]>;

    @Field(() => Author)
    @ManyToOne(
        () => Author,
        (author) => author.mangas,
        { nullable: true },
    )
    author: Relation<Author>;

    @Field(() => [Chapter])
    @OneToMany(
        () => Chapter,
        (chapter) => chapter.manga,
        { nullable: true },
    )
    chapters: Relation<Chapter[]>;

    getName() {
        return this.name;
    }
}
