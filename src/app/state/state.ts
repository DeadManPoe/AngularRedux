import {List} from "immutable";
import {Book} from "../book";

export interface State {
    queryResults: List<any>
    books: List<Book>
    filter: string

}
export const initialState: State = {
    queryResults : List([]),
    books: List([]),
    filter: 'NONE'
};
