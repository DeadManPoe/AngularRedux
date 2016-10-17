import {queryKeywordsReducer} from "./query-keywords-reducer";
import {queryBookReducer} from "./query-book-reducer";
import {booksReducer} from "./book-reducer";
import {filtersReducer} from "./filter-reducer";
import {combineReducers} from "redux";
import {State} from "./state";

export const rootReducer = combineReducers<State>({
    queryKeywords : queryKeywordsReducer,
    queryResults : queryBookReducer,
    books: booksReducer,
    filters: filtersReducer
});