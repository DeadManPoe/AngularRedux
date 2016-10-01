import {List} from 'immutable'
import {Book} from "../book";
import {BookActionBuilder} from "./book-action-builder";
import {booksReducer} from "./book-reducer";

describe('Book reducer tests : ', ()=>{
    var book : Book = {
        id : 1,
        title: 'sample_title',
        author : 'sample_author',
        cover : '',
        read : false
    };
    it('On ADD_BOOK action should return an immutable list with the added book',()=>{
        let action = BookActionBuilder.addBook(book);
        let resultList = booksReducer(undefined,action);
        expect(resultList.first()).toBe(book);
        expect(resultList.size).toBe(1);

    });
    it('On UPDATE_BOOK action should return an immutable list with the values of the book updated',()=>{
        let list = List<Book>([book]);
        let updatedBook = {
            id : 1,
            title : 'updated_title',
            author : 'sample_author',
            cover : '',
            read : false
        };
        let action = BookActionBuilder.updateBook(updatedBook);
        let resultList = booksReducer(list,action);
        expect(resultList.find((item)=>{
            return item.id === book.id;
        }).title).toBe('updated_title');
        expect(resultList.find((item)=>{
            return item.id === book.id;
        }).author).toBe('sample_author');
        expect(resultList.find((item)=>{
            return item.id === book.id;
        }).cover).toBe('');
        expect(resultList.find((item)=>{
            return item.id === book.id;
        }).read).toBe(false);
        expect(resultList.size).toBe(1);

    });
    it('On REMOVE_BOOK action should return an immutable list with the book removed',()=>{
        let list = List<Book>([book]);
        let action = BookActionBuilder.removeBook(1);
        let resultList = booksReducer(list, action);
        expect(resultList.size).toBe(0);
    });
    it('On TOGGLE_READ action should return an immutable list with the book read property toggled',()=>{
        let list = List<Book>([book]);
        let action = BookActionBuilder.toggleRead(1);
        let resultList = booksReducer(list, action);
        expect(resultList.first().read).toBe(true);
        resultList = booksReducer(resultList,action);
        expect(resultList.first().read).toBe(false);
    });
});