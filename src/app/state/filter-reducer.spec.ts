import {FilterActionBuilder} from "./filter-action-builder";
import {filtersReducer} from "./filter-reducer";
describe('Filter reducer tests',()=>{
    it('On READ_FILTER action should return a string which declarative states what if books are read filtered or not',()=>{
        let action = FilterActionBuilder.readFilter();
        expect(filtersReducer(undefined,action)).toBe('READ_FILTER');
        expect(filtersReducer('READ_FILTER',action)).toBe('NONE');
    })
});