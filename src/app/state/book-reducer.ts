import {Book} from "../book";
import {List} from "immutable";
import {Action} from "./action";


const addBook = (books: List<Book>, action: Action)=> {
    let book = action.payload;
    return books.push(book);
};
const removeBook = (books: List<Book>, action: Action)=> {
    let id = action.payload;
    let bookIndex = books.findIndex((item)=> {
        return item.id === id;
    });
    return books.delete(bookIndex);
};
const toggleReadBook = (books: List<Book>, action: Action)=> {
    let id = action.payload;
    let index = books.findIndex((item)=> {
        return item.id === id;
    });
    return books.update(index, (item)=> {
        return (<any>Object).assign({}, item, {read: !item.read});
    })

};

const updateBook = (books: List<Book>, action: Action) => {
    let id = action.payload.id;
    let index = books.findIndex((item)=> {
        return item.id === id;
    });
    return books.update(index, (item)=> {
        console.log((<any>Object).assign({}, item, action.payload.book));
        return (<any>Object).assign({}, item, action.payload.book);
    })
};
export const booksReducer = (books: List<Book> = List([]), action: Action)=> {
    switch (action.type) {
        case 'ADD_BOOK': {
            return addBook(books, action);
        }
        case 'REMOVE_BOOK': {
            return removeBook(books, action);
        }
        case 'TOGGLE_READ' : {
            return toggleReadBook(books, action);
        }
        case 'UPDATE_BOOK' : {
            return updateBook(books, action);
        }
        default : {
            return books;
        }
    }
};