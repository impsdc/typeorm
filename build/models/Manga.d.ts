import type { Relation } from "typeorm";
import { Author } from "./Author";
import { Chapter } from "./Chapter";
export declare class Manga {
    thumb: string;
    published: boolean;
    position: number;
    story: string;
    slug: string;
    keywords: string;
    status: string;
    statusProgression: number;
    name: string;
    author: Relation<Author>;
    chapters: Relation<Chapter[]>;
    getName(): string;
}
