import {ItemActionInterface, ItemActionsIdentifier} from './item-actions';
import {State, initialState} from './state';
import {List} from 'immutable'

export const itemsReducer = (state : State = initialState , action : ItemActionInterface): State =>{
    switch(action.type){
        case ItemActionsIdentifier.ADD_TEXT_ITEM:{
            return {
                loadedItems : state.loadedItems.push({
                    id: action.id,
                    title: action.title,
                    text : action.text
                }),
                filter : state.filter
            }
        }
        case ItemActionsIdentifier.UPDATE_TEXT_ITEM: {
            //Returns the index of the item we want to update in the loadedItems collection
            let index = state.loadedItems.findIndex((value)=>{
                return value.id === action.id
            })
            return {
                //Performs update
                loadedItems : state.loadedItems.set(index, {
                    id : action.id,
                    title : action.title,
                    text: action.text,
                }),
                filter : state.filter
            }
            
        }
        default:
            return state;
    }
}