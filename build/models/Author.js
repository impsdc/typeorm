import * as tslib_1 from "tslib";
import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany } from "typeorm";
import { Manga } from "./Manga";
let Author = class Author {
    truc;
    firstname;
    mangas;
};
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Author.prototype, "truc", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Author.prototype, "firstname", void 0);
__decorate([
    Field(() => [Manga]),
    OneToMany(() => Manga, (manga) => manga.author),
    __metadata("design:type", Array)
], Author.prototype, "mangas", void 0);
Author = __decorate([
    Entity("authors")
], Author);
export { Author };
let AuthorInput = class AuthorInput {
    name;
    firstname;
};
__decorate([
    Field(),
    __metadata("design:type", String)
], AuthorInput.prototype, "name", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AuthorInput.prototype, "firstname", void 0);
AuthorInput = __decorate([
    InputType()
], AuthorInput);
export { AuthorInput };
//# sourceMappingURL=Author.js.map