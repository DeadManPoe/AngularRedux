import {booksReducer} from "./book-reducer";
import {filtersReducer} from "./filter-reducer";
import {combineReducers} from "redux";
import {State} from "./state";
import {gbooksQueryReducer} from "./gbooks-query-reducer";
import {userReducer} from "./user-reducer";

export const rootReducer = combineReducers<State>({
    user : userReducer,
    gbooksQuery : gbooksQueryReducer,
    books: booksReducer,
    filters: filtersReducer
});