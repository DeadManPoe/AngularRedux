import {List} from "immutable";
import {Book} from "../book";
import {FilterMap} from "../filter-map";

export interface State {
    user : any
    gbooksQuery : GbooksQuery
    books: List<Book>
    filters: FilterMap
}
export const initialState: State = {
    user : {
        user : {},
        mode : 'NOT_LOGGED',
    },
    gbooksQuery : {
        pending : false,
        errors : null,
        keywords : '',
        results : []
    },
    books: List([]),
    filters: {
        readBooks : false
    }
};
export interface GbooksQuery {
    pending: boolean,
    errors: any,
    keywords: string,
    results: Object[]
}
