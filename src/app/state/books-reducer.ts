import {Action} from '@ngrx/store';
import {Book} from '../book'
import {State, initialState} from '../state/state';
import {List} from 'immutable';


const addBook = (state  = initialState.books, action : Action)=>{
    let book = action.payload;
    return state.push(book);
}
/*const deleteBook = (state , action : Action)=>{
    let id = action.payload;
    let bookIndex = state.books.findIndex((item)=>{
        return item.id === id;
    })
    return (<any>Object).assign({},state,{books: state.books.delete(bookIndex)});
}
const toggleRead = (state : State, action : Action) =>{
    let id = action.payload;
    let bookIndex = state.books.findIndex((item)=>{
        return item.id === id;
    })
    let editedBook = (<any>Object).assign({},state.books.get(bookIndex),{read: true});
    return (<any>Object).assign({},state, {books: state.books.set(bookIndex,editedBook)});
}*/



export const booksReducer = (state, action : Action)=>{
    switch(action.type){
        case 'ADD_BOOK': {
            return addBook(state,action);
        }
        /*case 'DEL_BOOK': {
            deleteBook(state,action);
        }
        case 'TOGGLE_READ' : {
            toggleRead(state,action);
        }*/
        default : {
            return state;
        }
    }
}