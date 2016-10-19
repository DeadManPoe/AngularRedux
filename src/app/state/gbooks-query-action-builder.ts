
import {Action} from "./action";
export class GbooksQueryActionBuilder {

    static queryStarted(keywords : string) : Action{
        return {
            type : 'QUERY_STARTED',
            payload : keywords
        }
    }
    static querySucceded(results : Object[]) : Action{
        return {
            type : 'QUERY_SUCCEDED',
            payload : results
        }
    }
    static queryErrored(errors : Object) : Action {
        return {
            type : 'QUERY_ERRORED',
            payload : errors
        }
    }
    static queryResetted() : Action {
        return {
            type: 'QUERY_RESETTED',
            payload : null
        }
    }
}