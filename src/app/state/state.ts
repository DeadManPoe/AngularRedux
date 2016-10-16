import {List} from "immutable";
import {Book} from "../book";
import {FilterMap} from "../filter-map";

export interface State {
    queryKeywords : string
    queryResults: List<any>
    books: List<Book>
    filters: FilterMap

}
export const initialState: State = {
    queryKeywords: '',
    queryResults : List([]),
    books: List([]),
    filters: {
        readBooks : false
    }
};
