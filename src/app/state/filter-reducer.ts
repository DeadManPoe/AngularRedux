import {Action} from '@ngrx/store';

const readFilter = (filter : string, action : Action)=>{
    if(filter === 'READ_FILTER'){
        return 'NONE'
    }
    else {
        return 'READ_FILTER'
    }
};
export const filtersReducer = (filter : string = 'NONE', action : Action)=>{
    switch(action.type){
        case 'READ_FILTER': {
            return readFilter(filter,action);
        }
        default : {
            return filter;
        }
    }
};