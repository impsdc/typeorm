import { BaseEntity } from "typeorm";
import { Manga } from "./Manga";
export declare class Notif extends BaseEntity {
    id: string;
    mangas: Manga[];
    constructor(id: string);
    setMangas(mangas: Manga[]): Promise<void>;
    getMangas(): Manga[];
}
export declare class NotifInput {
    id: string;
    mangas: Manga[];
}
