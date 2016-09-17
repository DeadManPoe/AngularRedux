export interface ItemActionInterface {
    type : string,
    id? : number,
    title? : string,
    text? : string,
}

export const ItemActionsIdentifier = {
    ADD_TEXT_ITEM : 'ADD_TEXT_ITEM',
    UPDATE_TEXT_ITEM : 'UPDATE_TEXT_ITEM'
}

export class ItemActions {
    id: number;
    constructor(){
        this.id = 0;
    }

    addTextItem(title : string, text:string): ItemActionInterface{
        return {
            id : this.id++,
            type: 'ADD_TEXT_ITEM',
            title : title,
            text : text
        }
    }
    updateTextItem(title: string, text : string): ItemActionInterface{
        return {
            type: 'UPDATE_TEXT_ITEM',
            title : title,
            text : text
        }
    }
}