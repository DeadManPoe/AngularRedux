
export class QueryActionBuilder {
    static queryBookStarted(){
        return {
            type : 'QUERY_BOOK_STARTED',
            payload : null
        }
    }
    static queryBookSucceded(results : Object[]){
        return {
            type : 'QUERY_BOOK_SUCCEDED',
            payload : results
        }
    }
    static queryBookErrored(){
        return {
            type : 'QUERY_BOOK_ERRORED',
            payload : null
        }
    }
    static setQueryKeywords(keywords : string){
        return {
            type : 'SET_KEYWORDS',
            payload : keywords
        }
    }
}