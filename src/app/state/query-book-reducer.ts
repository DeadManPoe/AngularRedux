
import {List} from "immutable";
import {Action} from "./action";

const queryBook = (queryResults : List<any>, action : Action)=>{
    return List(action.payload);
};
export const queryBookReducer = (queryResults : List<any> = List([]), action : Action )=>{
    switch(action.type){
        case 'QUERY_BOOK' : {
            return queryBook(queryResults, action);
        }
        default : {
            return queryResults;
        }
    }
};
