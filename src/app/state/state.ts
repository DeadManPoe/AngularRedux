import {List} from "immutable";
import {Book} from "../book";
import {FilterMap} from "../filter-map";

export interface State {
    gbooksQuery : GbooksQuery
    books: List<Book>
    filters: FilterMap
}
export const initialState: State = {
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
