import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { BaseEntity, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Manga } from "./Manga";

@ObjectType("Notif")
@Entity("notifs")
export class Notif extends BaseEntity {
	@Field()
	@PrimaryColumn({ unique: true })
	id: string;

	@Field((type) => Manga)
	@ManyToMany((type) => Manga)
	@JoinTable({ name: "notifs_mangas" })
	mangas: Manga[];

	constructor(id: string) {
		super();
		this.id = id;
	}

	async setMangas(mangas: Manga[]) {
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
}

@InputType("NotifInput")
@ArgsType()
export class NotifInput {
	@Field()
	id: string;

	@Field((type) => [Manga])
	mangas: Manga[];
}
