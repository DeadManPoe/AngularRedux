
export class QueryActionBuilder {
    static queryBook(results : Object[] ){
        return {
            type : 'QUERY_BOOK',
            payload : results
        }
    }
    static setQueryKeywords(keywords : string){
        return {
            type : 'SET_KEYWORDS',
            payload : keywords
        }
    }
}