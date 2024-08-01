import type { Relation } from "typeorm";
import { Lang } from "./Lang";
import { Manga } from "./Manga";
import { TeamMember } from "./TeamMember";
export declare class Chapter {
    name: string;
    number: number;
    thumb: string;
    published: boolean;
    keywords: string;
    likes: number;
    nextChapter: Relation<Chapter | null>;
    manga: Relation<Manga>;
    lang: Relation<Lang>;
    members: Relation<TeamMember[]>;
}
