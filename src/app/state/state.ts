import {List} from "immutable";
import {Book} from "../book";

export interface State {
    queryKeywords : string
    queryResults: List<any>
    books: List<Book>
    filter: string

}
export const initialState: State = {
    queryKeywords: '',
    queryResults : List([]),
    books: List([]),
    filter: 'NONE'
};
