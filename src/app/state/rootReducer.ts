import {State, initialState} from './state';
import {FilterActionInterface} from './filter-actions';
import {ItemActionInterface} from './item-actions';
import {filtersReducer} from './filters-reduce';
import {itemsReducer} from './items-reducer';
import {combineReducers} from 'redux';

export const rootReducer = (state : State = initialState, action : ItemActionInterface)=>{
    return itemsReducer(state,action);
}