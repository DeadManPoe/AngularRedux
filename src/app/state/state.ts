import {List} from "immutable";
import {Book} from "../book";

export interface State {
    query: QueryObject
    books: List<Book>
    filter: string

}
export const initialState: State = {
    query : {
        queryText : '',
        queryResult : []
    },
    books: List([]),
    filter: 'NONE'
};
interface QueryObject {
    queryText : string
    queryResult : any[]
}