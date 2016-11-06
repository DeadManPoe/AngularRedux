import {Action} from "./action";

const initialFilters = {
    readBooks : false
};
const changeFilter = (filters: any, action: Action)=> {
    return action.payload;
};
export const filtersReducer = (filters: any = initialFilters, action: Action)=> {
    switch (action.type) {
        case 'CHANGE_FILTERS': {
            return changeFilter(filters, action);
        }
        default : {
            return filters;
        }
    }
};
