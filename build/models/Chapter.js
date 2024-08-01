import * as tslib_1 from "tslib";
import { ArgsType, Field, InputType, Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, Unique } from "typeorm";
import { Lang } from "./Lang";
import { Manga } from "./Manga";
import { TeamMember } from "./TeamMember";
let Chapter = class Chapter {
    name;
    number;
    thumb;
    published;
    keywords;
    likes;
    nextChapter;
    manga;
    lang;
    members;
};
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], Chapter.prototype, "name", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Number)
], Chapter.prototype, "number", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Chapter.prototype, "thumb", void 0);
__decorate([
    Field(),
    Column({ default: true }),
    __metadata("design:type", Boolean)
], Chapter.prototype, "published", void 0);
__decorate([
    Field(),
    Column("text", { nullable: true }),
    __metadata("design:type", String)
], Chapter.prototype, "keywords", void 0);
__decorate([
    Field(),
    Column({ default: 0 }),
    __metadata("design:type", Number)
], Chapter.prototype, "likes", void 0);
__decorate([
    Field(() => Chapter),
    __metadata("design:type", Object)
], Chapter.prototype, "nextChapter", void 0);
__decorate([
    Field(() => Manga),
    ManyToOne(() => Manga, (manga) => manga.chapters),
    __metadata("design:type", Object)
], Chapter.prototype, "manga", void 0);
__decorate([
    Field(() => Lang),
    ManyToOne(() => Lang, (lang) => lang.chapters, { nullable: true }),
    __metadata("design:type", Object)
], Chapter.prototype, "lang", void 0);
__decorate([
    Field(() => [TeamMember]),
    ManyToMany(() => TeamMember, (teamMember) => teamMember.chapters),
    JoinTable(),
    __metadata("design:type", Object)
], Chapter.prototype, "members", void 0);
Chapter = __decorate([
    Entity("chapters")
], Chapter);
export { Chapter };
//# sourceMappingURL=Chapter.js.map