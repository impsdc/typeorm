import * as tslib_1 from "tslib";
import { randomUUID } from "node:crypto";
import { ArgsType, Field, InputType, Int, ObjectType } from "type-graphql";
import { Column, Entity, Unique } from "typeorm";
let User = class User {
    username;
    role;
    password;
    update(username, role, password) {
        // this.username = Utils.getSlug(username);
        this.username = username;
        this.password = password
            ? password
            : this.password
                ? this.password
                : randomUUID();
        this.role = role > -1 ? role : 0;
    }
    get getable() {
        return {
            ...this,
            password: undefined,
        };
    }
};
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Field((_type) => Int),
    Column({ default: 2 }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    Entity("users")
], User);
export { User };
//# sourceMappingURL=User.js.map