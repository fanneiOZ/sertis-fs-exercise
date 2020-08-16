import {UserState} from "./interfaces/user.interface";

export class User {
    static create(name: string, password: string): User {
        const newState: UserState = {
            id: 'id',
            name,
        }

        return new User(newState, password)
    }

    private constructor(
        private state: UserState,
        private password: string
    ) {}

    authorize(password: string): boolean {
        return password === this.password
    }

    getState(): Readonly<UserState> {
        return this.state
    }
}