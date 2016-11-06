import {List} from "immutable";
import {Book} from "../book";

export interface State {
    user : any
    gbooksQuery : GbooksQuery
    books: BooksInterface
    filters: FiltersInterface
}
export const initialState: State = {
    user : {
        user : {},
        mode : 'NOT_LOGGED',
    },
    gbooksQuery : {
        side_effects : {
            pending : List([]),
            errors : List([])
        },
        keywords : '',
        results : List([])
    },
    books: {
        side_effects : {
            pending : List([]),
            errors : List([])
        },
        books : List([])
    },
    filters: {
        readBooks : false
    }
};
interface GbooksQuery {
    side_effects : SideEffects
    keywords: string,
    results: List<any>
}

export interface SideEffects{
    pending : List<string>,
    errors : List<any>
}
export interface BooksInterface {
    side_effects : SideEffects,
    books : List<Book>
}
interface FiltersInterface {
    readBooks : boolean
}