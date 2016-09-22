import {Action} from '@ngrx/store';
import {Book} from '../book'
import {List} from 'immutable';


const addBook = (books : List<Book>, action : Action)=>{
    let book = action.payload;
    return books.push(book);
};
const removeBook = (books : List<Book> , action : Action)=>{
    let id = action.payload;
    let bookIndex = books.findIndex((item)=>{
        return item.id === id;
    });
    return books.delete(bookIndex);
};
const toggleReadBook = (books: List<Book>, action :Action)=>{
    let id = action.payload;
    let index =  books.findIndex((item)=>{
        return item.id === id;
    });
    return books.update(index, (item)=>{
        return (<any>Object).assign({},item,{read : !item.read});
    })

};

export const booksReducer = (books : List<Book> = List([]), action : Action)=>{
    switch(action.type){
        case 'ADD_BOOK': {
            return addBook(books,action);
        }
        case 'REMOVE_BOOK': {
            return removeBook(books,action);
        }
        case 'TOGGLE_READ' : {
            return toggleReadBook(books, action);
        }
        default : {
            return books;
        }
    }
};