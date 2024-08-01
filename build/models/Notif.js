import * as tslib_1 from "tslib";
import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { BaseEntity, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Manga } from "./Manga";
let Notif = class Notif extends BaseEntity {
    id;
    mangas;
    constructor(id) {
        super();
        this.id = id;
    }
    async setMangas(mangas) {
        console.log("setMangas", mangas);
        // if (this.mangas) {
        // 	await Promise.all(
        // 		this.mangas.map(async (manga) => {
        // 			return Main.messaging.unsubscribeFromTopic(this.id, manga.id.toString());
        // 		})
        // 	);
        // }
        // this.mangas = mangas;
        // this.mangas.map(async (manga) => {
        // 	await Main.messaging.subscribeToTopic(this.id, manga.id.toString());
        // });
    }
    getMangas() {
        return this.mangas;
    }
};
__decorate([
    Field(),
    PrimaryColumn({ unique: true }),
    __metadata("design:type", String)
], Notif.prototype, "id", void 0);
__decorate([
    Field((type) => Manga),
    ManyToMany((type) => Manga),
    JoinTable({ name: "notifs_mangas" }),
    __metadata("design:type", Array)
], Notif.prototype, "mangas", void 0);
Notif = __decorate([
    ObjectType("Notif"),
    Entity("notifs"),
    __metadata("design:paramtypes", [String])
], Notif);
export { Notif };
let NotifInput = class NotifInput {
    id;
    mangas;
};
__decorate([
    Field(),
    __metadata("design:type", String)
], NotifInput.prototype, "id", void 0);
__decorate([
    Field((type) => [Manga]),
    __metadata("design:type", Array)
], NotifInput.prototype, "mangas", void 0);
NotifInput = __decorate([
    InputType("NotifInput"),
    ArgsType()
], NotifInput);
export { NotifInput };
//# sourceMappingURL=Notif.js.map