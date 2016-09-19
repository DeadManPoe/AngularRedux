import {Action} from '@ngrx/store';
import {State, initialState} from '../state/state';
import {List} from 'immutable';


const addBook = (state : State = initialState, action : Action)=>{
    let book = action.payload;
    return (<any>Object).assign({}, state, {books : state.books.push(book)});
}
const deleteBook = (state : State, action : Action)=>{
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
}



export const booksReducer = (state : State, action : Action)=>{
    switch(action.type){
        case 'ADD_BOOK': {
            addBook(state,action);
        }
        case 'DEL_BOOK': {
            deleteBook(state,action);
        }
        case 'TOGGLE_READ' : {
            toggleRead(state,action);
        }
        default : {
            return state;
        }
    }
}