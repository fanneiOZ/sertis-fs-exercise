import {injectable} from "tsyringe";
import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";
import {Card} from "../models/card";

@injectable()
export class CardRepository {
    getById(id: Identifier): Card | undefined {
        return
    }
}