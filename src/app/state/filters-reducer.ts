import {Action} from '@ngrx/store';
import {State, initialState} from '../state/state';

const readFilter = (state : State = initialState, action : Action)=>{
    return (<any>Object).assign({}, state, {filter : 'BOOKS_READ'});
}
export const filtersReducer = (state : State, action : Action)=>{
    switch(action.type){
        case 'FILTER_BOOKS_READ': {
            readFilter(state,action);
        }
        default : {
            return state;
        }
    }
}