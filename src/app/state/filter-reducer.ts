import {Action} from "@ngrx/store";
import {FilterMap} from "../filter-map";

const initialFilters = {
    readBooks : false
};
const changeFilter = (filters: FilterMap, action: Action)=> {
    return action.payload;
};
export const filtersReducer = (filters: FilterMap, action: Action)=> {
    switch (action.type) {
        case 'CHANGE_FILTER': {
            return changeFilter(filters, action);
        }
        default : {
            return filters;
        }
    }
};
