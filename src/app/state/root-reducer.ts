import {booksReducer} from "./book-reducer";
import {filtersReducer} from "./filter-reducer";
import {combineReducers} from "redux";
import {State} from "./state";
import {gbooksQueryReducer} from "./gbooks-query-reducer";

export const rootReducer = combineReducers<State>({
    gbooksQuery : gbooksQueryReducer,
    books: booksReducer,
    filters: filtersReducer
});