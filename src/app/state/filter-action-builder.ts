export class FilterActionBuilder {
    static changeFilters(filters : any) {
        return {
            type: 'CHANGE_FILTERS',
            payload: filters
        }
    }
}