import {FilterMap} from "../filter-map";
export class FilterActionBuilder {
    static changeFilters(filters : FilterMap) {
        return {
            type: 'CHANGE_FILTERS',
            payload: filters
        }
    }
}