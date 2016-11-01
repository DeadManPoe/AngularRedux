import {Book} from "../book";
export class BookActionBuilder {

    static addBook(book: Book) {
        return {
            type: 'ADD_BOOK',
            payload: book
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
