import {Identifier, Writable} from "../../../libs/domain-driven/interfaces/repository.interface";
import {UserState, WritableUserState} from "./interfaces/user.interface";

export class User extends Writable<WritableUserState> {
    static create(id: Identifier, name: string, password: string): User {
        return new User({id, name}, password)
    }

    private constructor(
        private state: UserState,
        private password: string
    ) {
        super()
    }

    authorize(password: string): boolean {
        return password === this.password
    }

    getState(): Readonly<UserState> {
        return this.state
    }

    toJSON(): WritableUserState {
        return {...this.state, password: this.password}
    }
}