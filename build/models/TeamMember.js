import * as tslib_1 from "tslib";
import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany } from "typeorm";
import { Chapter } from "./Chapter";
let TeamMember = class TeamMember {
    name;
    role;
    image;
    pref;
    type;
    twitter;
    instagram;
    discord;
    chapters;
};
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], TeamMember.prototype, "name", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], TeamMember.prototype, "role", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], TeamMember.prototype, "image", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "pref", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "type", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "twitter", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "instagram", void 0);
__decorate([
    Field(),
    Column({ nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "discord", void 0);
__decorate([
    Field((type) => Chapter),
    ManyToMany((type) => TeamMember, (teamMember) => teamMember.chapters),
    __metadata("design:type", Array)
], TeamMember.prototype, "chapters", void 0);
TeamMember = __decorate([
    Entity("team_members")
], TeamMember);
export { TeamMember };
//# sourceMappingURL=TeamMember.js.map