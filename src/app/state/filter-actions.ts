import {FilterType} from './filter-type'
export interface FilterActionInterface {
    type : FilterType,
}

export class FilterActions {
    
    lastAdded(): FilterActionInterface{
        return {
            type: FilterType.LAST_ADDED,
        }
    }
    onlyTextItems(): FilterActionInterface{
        return {
            type: FilterType.ONLY_TEXT_ITEMS,
        }
    }
}