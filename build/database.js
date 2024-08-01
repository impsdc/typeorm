console.log("in", `${__dirname}/../build/src/models/*{.js}`);
import { DataSource } from "typeorm";
// import { Author } from "./models/Author";
// import { Chapter } from "./models/Chapter";
// import { Lang } from "./models/Lang";
// import { Manga } from "./models/Manga";
// import { New } from "./models/New";
// import { Notif } from "./models/Notif";
// import { TeamMember } from "./models/TeamMember";
// import { User } from "./models/User";
const connectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    password: "root",
    database: "lg",
    entities: [`${__dirname}/../build/src/models/*{.js}`],
    migrations: [`${__dirname}/../build/migrations/*{.js}`],
    synchronize: false,
};
const dataSource = new DataSource(connectionOptions);
export default dataSource;
//# sourceMappingURL=database.js.map