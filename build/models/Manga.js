import * as tslib_1 from "tslib";
import { ArgsType, Field, InputType, Int, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, Unique } from "typeorm";
import { Author, AuthorInput } from "./Author";
import { Chapter } from "./Chapter";
import { Notif } from "./Notif";
let Manga = class Manga {
    thumb;
    published;
    position;
    story;
    slug;
    keywords;
    status;
    statusProgression;
    name;
    // @ManyToMany(() => Notif)
    // notifs: Relation<Notif[]>;
    author;
    chapters;
    getName() {
        return this.name;
    }
};
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Manga.prototype, "thumb", void 0);
__decorate([
    Field(),
    Column({ default: true }),
    __metadata("design:type", Boolean)
], Manga.prototype, "published", void 0);
__decorate([
    Field(),
    Column({ default: 9999 }),
    __metadata("design:type", Number)
], Manga.prototype, "position", void 0);
__decorate([
    Field(),
    Column("text", { nullable: true }),
    __metadata("design:type", String)
], Manga.prototype, "story", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Manga.prototype, "slug", void 0);
__decorate([
    Field(),
    Column("text", { nullable: true }),
    __metadata("design:type", String)
], Manga.prototype, "keywords", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], Manga.prototype, "status", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", Number)
], Manga.prototype, "statusProgression", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Manga.prototype, "name", void 0);
__decorate([
    Field(() => Author),
    ManyToOne(() => Author, (author) => author.mangas, { nullable: true }),
    __metadata("design:type", Object)
], Manga.prototype, "author", void 0);
__decorate([
    Field(() => [Chapter]),
    OneToMany(() => Chapter, (chapter) => chapter.manga, { nullable: true }),
    __metadata("design:type", Object)
], Manga.prototype, "chapters", void 0);
Manga = __decorate([
    Entity("mangas")
], Manga);
export { Manga };
//# sourceMappingURL=Manga.js.map