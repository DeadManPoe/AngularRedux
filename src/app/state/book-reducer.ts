import {List} from "immutable";
import {Action} from "./action";
import {BooksInterface, SideEffects} from "./state";
import {initialSideEffects} from "./intial-side-effects";

const initialBooks = {
    side_effects: initialSideEffects,
    books: List([])
};

const addBook = (books: BooksInterface, action: Action)=> {
    let book = action.payload;
    return Object.assign({}, books, {
        books: books.books.push(book)
    });
};
const removeBook = (books: BooksInterface, action: Action)=> {
    let id = action.payload;
    let bookIndex = books.books.findIndex((item)=> {
        return item.id === id;
    });
    return Object.assign({}, books, {
        books: books.books.delete(bookIndex)
    });
};
const toggleReadBook = (books: BooksInterface, action: Action)=> {
    let id = action.payload;
    let index = books.books.findIndex((item)=> {
        return item.id === id;
    });
    return Object.assign({}, books, {
        books: books.books.update(index, (item)=> {
            return (<any>Object).assign({}, item, {read: !item.read});
        })
    })
};
const updateBook = (books: BooksInterface, action: Action) => {
    let id = action.payload.id;
    let index = books.books.findIndex((item)=> {
        return item.id === id;
    });
    return Object.assign({}, books, {
        books: books.books.update(index, (item)=> {
            return Object.assign({}, item, action.payload.book);
        })
    });
};

const sideEffectStarted = (books: BooksInterface, action: Action) => {
    let partialObject = Object.assign({},books.side_effects, {
        pending : books.side_effects.pending.push(action.payload)
    });
    return Object.assign({}, books, {
        side_effects: partialObject
    });
};
const sideEffectFinished = (books : BooksInterface, action: Action) => {
    let id = action.payload;
    let sideEffectIndex = books.side_effects.pending.findIndex((item)=> {
        return item === id;
    });
    let partialObject = Object.assign({},books.side_effects, {
        pending : books.side_effects.pending.delete(sideEffectIndex)
    });
    return Object.assign({},books, {
        side_effects : partialObject
    });
};
const sideEffectErrored = (books: BooksInterface, action: Action)=> {
    let intermediateState = sideEffectFinished(books, action);
    return Object.assign({}, intermediateState, {
        side_effects : Object.assign({},intermediateState.side_effects, {
            errors : intermediateState.side_effects.errors.push({
                id: action.payload.id,
                error: action.payload.error
            })
        })
    });
};

export const booksReducer = (books: BooksInterface = initialBooks, action: Action)=> {
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
        case 'SIDE_EFFECT_START': {
            return sideEffectStarted(books, action);
        }
        case 'SIDE_EFFECT_END': {
            return sideEffectFinished(books, action);
        }
        case 'SIDE_EFFECT_ERRORED' : {
            return sideEffectErrored(books, action);
        }
        default : {
            return books;
        }
    }
};