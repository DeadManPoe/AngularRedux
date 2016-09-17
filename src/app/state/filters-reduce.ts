import {FilterActionInterface} from './filter-actions';
import {FilterType} from './filter-type';
import {State, initialState} from './state';
import {List} from 'immutable'

export const filtersReducer = (state : State = initialState , action : FilterActionInterface): State =>{
    switch(action.type){
        case FilterType.LAST_ADDED:{
            return state;
           
        }
        case FilterType.ONLY_TEXT_ITEMS: {
            return state;
            
        }
        default:
            return state;
    }
}