
import {List} from "immutable";
import {Action} from "./action";

const queryBookSucceded = (queryResults : List<any>, action : Action)=>{
    return List(action.payload);
};
const queryBookStart = (queryResults: List<any>, action: Action)=>{
    return queryResults;
};
const queryBookErrored = (queryResults: List<any>, action : Action)=>{
    return queryResults;
};
export const queryBookReducer = (queryResults : List<any> = List([]), action : Action )=>{
    switch(action.type){
        case 'QUERY_BOOK_START' : {
            return queryBookStart(queryResults, action);
        }
        case 'QUERY_BOOK_ERRORED': {
            return queryBookErrored(queryResults, action);
        }
        case 'QUERY_BOOK_SUCCEDED' : {
            return queryBookSucceded(queryResults, action);
        }
        default : {
            return queryResults;
        }
    }
};
