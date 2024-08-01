import * as tslib_1 from "tslib";
import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
let New = class New {
    topic;
    text;
};
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], New.prototype, "topic", void 0);
__decorate([
    Field(),
    Column({ type: "text" }),
    __metadata("design:type", String)
], New.prototype, "text", void 0);
New = __decorate([
    Entity("news")
], New);
export { New };
//# sourceMappingURL=New.js.map