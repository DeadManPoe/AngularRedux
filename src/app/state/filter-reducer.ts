import {FilterMap} from "../filter-map";
import {Action} from "./action";

const initialFilters = {
    readBooks : false
};
const changeFilter = (filters: FilterMap, action: Action)=> {
    return action.payload;
};
export const filtersReducer = (filters: FilterMap = initialFilters, action: Action)=> {
    switch (action.type) {
        case 'CHANGE_FILTERS': {
            return changeFilter(filters, action);
        }
        default : {
            return filters;
        }
    }
};
