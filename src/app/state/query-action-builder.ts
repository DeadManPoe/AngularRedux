
export class QueryActionBuilder {
    static queryBook(results : Object[] ){
        return {
            type : 'QUERY_BOOK',
            payload : results
        }
    }
}