import {TextItem, ImgItem} from '../item';
import {FilterType} from './filter-type';
import {List} from 'immutable';

export interface State {
    loadedItems : List<ImgItem | TextItem>,
    filter : FilterType
}
export const initialState : State = {
    loadedItems : List([]),
    filter : FilterType.LAST_ADDED
}