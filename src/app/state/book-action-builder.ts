import {Book} from "../book";
export class BookActionBuilder {

    static addBook(book: Book) {
        return {
            type: 'ADD_BOOK',
            payload: book
        }
    }
    static getBooks(){
        return {
            type: 'GET_BOOKS',
            payload : null
        }
    }
    static persistOnDb(action, mode, id, error){
        switch(mode){
            case 'START': {
                return {
                    type: 'SIDE_EFFECT_START',
                    subtype: action.type+'_DB',
                    payload :  id
                }
            }
            case 'END': {
                return {
                    type: 'SIDE_EFFECT_END',
                    subtype: action.type+'_DB',
                    payload : id
                }
            }
            case 'ERRORED': {
                return {
                    type: 'SIDE_EFFECT_ERRORED',
                    subtype: action.type+'_DB',
                    payload : {
                        id : id,
                        error : error
                    }
                }
            }
            default : {
                throw new Error('Invalid Mode');
            }


        }

    }

    static removeBook(bookId: number) {
        return {
            type: 'REMOVE_BOOK',
            payload: bookId
        }
    }

    static toggleRead(bookId: number) {
        return {
            type: 'TOGGLE_READ',
            payload: bookId
        }
    }

    static updateBook(bookId : number,book: any) {
        return {
            type: 'UPDATE_BOOK',
            payload: {
                id : bookId,
                book : book
            }
        }
    }
}
