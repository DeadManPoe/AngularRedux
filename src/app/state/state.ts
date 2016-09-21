import {List} from 'immutable';
import {Book} from '../book'

export interface State {
    books : List<Book>,
    filter : string

}
export const initialState : State = {
    books : List([]),
    filter : 'NONE'
}
export const StateStructurer = (booksReducer : Function, filtersReducer : Function )=>{
        return {
            books : booksReducer,
            filters : filtersReducer
        }
}
