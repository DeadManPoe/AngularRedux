import {Book} from "../book";
import {List} from "immutable";
import {Action} from "./action";
import {BooksInterface, SideEffects} from "./state";
import {initialSideEffects} from "./intial-side-effects";

const initialBooks = {
    side_effects: initialSideEffects,
    books: List([])
};

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

const startSideEffect = (side_effects: SideEffects, action: Action) : SideEffects=> {
    let targetObj = Object.assign({}, side_effects, {
        pending : side_effects.pending.push(action.payload)
    });
    return targetObj;
};
const sideEffectFinished = (side_effects: SideEffects, action: Action) : SideEffects=> {
    let id = action.payload;
    let sideEffectIndex = side_effects.pending.findIndex((item)=> {
        return item === id;
    });
    let targetObj = Object.assign({}, side_effects, {
        pending : side_effects.pending.delete(sideEffectIndex)
    });
    return targetObj;
};
const sideEffectErrored = (side_effects: SideEffects, action : Action)=>{
    let targetObj = Object.assign({}, sideEffectFinished(side_effects,action), {
        errors : side_effects.errors.push({
            id : action.payload.id,
            error : action.payload.error
        })
    });
    return targetObj
};

export const booksReducer = (books: BooksInterface = initialBooks, action: Action)=> {
    switch (action.type) {
        case 'ADD_BOOK': {
            return addBook(books.books, action);
        }
        case 'REMOVE_BOOK': {
            return removeBook(books.books, action);
        }
        case 'TOGGLE_READ' : {
            return toggleReadBook(books.books, action);
        }
        case 'UPDATE_BOOK' : {
            return updateBook(books.books, action);
        }
        case 'START_SIDE_EFFECT': {
            return startSideEffect(books.side_effects, action);
        }
        case 'FINISH_SIDE_EFFECT': {
            return sideEffectFinished(books.side_effects, action);
        }
        case 'SIDE_EFFECT_ERRORED' : {
            return sideEffectErrored(books.side_effects, action);
        }
        default : {
            return books;
        }
    }
};