export declare class User {
    username: string;
    role: number;
    password: string;
    update(username: string, role: number, password?: string): void;
    get getable(): User;
}
