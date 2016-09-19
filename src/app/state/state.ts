import {List} from 'immutable';

export interface State {
    books : List<any>,
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
