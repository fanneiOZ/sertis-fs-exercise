import {Route} from "../../../libs/common/route";
import {AddCardController} from "./add-card.controller";
import {DeleteCardController} from "./delete-card.controller";
import {EditCardController} from "./edit-card.controller";

export const cardRoutes: Route[] = [
    /**
     * Add new card
     */
    Route.create('post', '/card/').setHandler(AddCardController),
    /**
     * Delete card by id
     */
    Route.create('delete', '/card/:id').setHandler(DeleteCardController),
    /**
     * Edit card by id
     */
    Route.create('put', '/card/:id').setHandler(EditCardController),
]