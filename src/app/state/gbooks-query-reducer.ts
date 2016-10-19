
import {GbooksQuery, initialState} from "./state";
import {Action} from "./action";


const queryStarted = (gbooksQueryObj : GbooksQuery, action : Action) : GbooksQuery=>{
    let targetObj = (<any>Object).assign({},gbooksQueryObj,{
        pending : true,
        keywords : action.payload,
        errors : null
    });
    return targetObj;
};


const querySucceded = (gbooksQueryObj: GbooksQuery, action: Action) : GbooksQuery => {
    let targetObj = (<any>Object).assign({},gbooksQueryObj, {
        pending : false,
        results : action.payload,
        errors : null
    });
    return targetObj;
};
const queryErrored = (gbooksQueryObj: GbooksQuery, action: Action) : GbooksQuery =>{
    let targetObj = (<any>Object).assign({},gbooksQueryObj, {
        pending : false,
        errors : action.payload
    });
    return targetObj;
};
const queryResetted  = (gbooksQueryObj: GbooksQuery, action: Action) : GbooksQuery =>{
    let targetObj = {
        keywords : '',
        results : [],
        pending : false,
        errors : null
    };
    return targetObj;
};
export const gbooksQueryReducer = (gbooksQueryObj : GbooksQuery = initialState.gbooksQuery, action : Action) : GbooksQuery=>{
    switch(action.type){
        case 'QUERY_STARTED': {
            return queryStarted(gbooksQueryObj, action);
        }
        case 'QUERY_SUCCEDED': {
            return querySucceded(gbooksQueryObj, action);
        }
        case 'QUERY_ERRORED' : {
            return queryErrored(gbooksQueryObj, action);
        }
        case 'QUERY_RESETTED' : {
            return queryResetted(gbooksQueryObj, action);
        }
        default : {
            return gbooksQueryObj;
        }
    }
};