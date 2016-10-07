import {Action} from "@ngrx/store";
import {List} from "immutable";

const queryBook = (queryResults : List<any>, action : Action)=>{
    return List(action.payload);
};
export const queryBookReducer = (queryResults : List<any>, action : Action )=>{
    switch(action.type){
        case 'QUERY_BOOK' : {
            return queryBook(queryResults, action);
        }
        default : {
            return List([]);
        }
    }
};
