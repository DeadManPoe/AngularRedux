
import {Action} from "./action";
const setQueryKeywords = (keywords : string, action : Action)=>{
    return action.payload;
};
export const queryKeywordsReducer = (keywords : string = '', action : Action )=>{
    switch(action.type){
        case 'SET_KEYWORDS' : {
            return setQueryKeywords(keywords, action);
        }
        default : {
            return keywords;
        }
    }
};
