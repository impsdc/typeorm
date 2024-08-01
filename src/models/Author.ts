import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany } from "typeorm";
import { Manga } from "./Manga";

@Entity("authors")
export class Author {
    @Field()
    @Column()
    truc: string;

    @Field()
    @Column()
    firstname: string;

    @Field(() => [Manga])
    @OneToMany(
        () => Manga,
        (manga) => manga.author,
    )
    mangas: Manga[];
}

@InputType()
export class AuthorInput {
    @Field()
    name: string;

    @Field()
    firstname: string;
}
