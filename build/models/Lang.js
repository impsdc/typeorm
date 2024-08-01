import * as tslib_1 from "tslib";
import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany } from "typeorm";
import { Chapter } from "./Chapter";
let Lang = class Lang {
    name;
    shortName;
    chapters;
};
__decorate([
    Field(),
    Column({ nullable: false }),
    __metadata("design:type", String)
], Lang.prototype, "name", void 0);
__decorate([
    Field(),
    Column({ nullable: false }),
    __metadata("design:type", String)
], Lang.prototype, "shortName", void 0);
__decorate([
    Field((type) => Chapter),
    OneToMany((type) => Chapter, (chapter) => chapter.lang),
    __metadata("design:type", Array)
], Lang.prototype, "chapters", void 0);
Lang = __decorate([
    Entity("langs")
], Lang);
export { Lang };
//# sourceMappingURL=Lang.js.map