import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {BooksActionBuilder} from "../state/books-action-builder";
import {Book} from "../book";


@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
    @Input() books: Observable<any>;
    public partialBook : PartialBook;

    public updatingBookId : number;

    constructor(private _store: Store<State> ) {
        this.partialBook = {
            author : '',
            title : ''
        };
        this.updatingBookId = 0;
    }
    updatePartialBook(title: string, author: string){
        if(author){
            this.partialBook.author = author;
        }
        if(title){
            this.partialBook.title = title;
        }
    }
    compareBookIds(book: Book){
        return book.id === this.updatingBookId;
    }
    setUpdatingBookId(id : number){
        this.updatingBookId = id;
    }
    removeBook(bookId : number) {
        this._store.dispatch(BooksActionBuilder.removeBook(bookId));
    }

    toggleReadBook(bookId : number){
        this._store.dispatch(BooksActionBuilder.toggleRead(bookId));
    }
    updateBook(book : Book){
        this.setUpdatingBookId(0);
        var obj = (<any>Object).assign({},book,this.partialBook);
        //Change state
        this._store.dispatch(BooksActionBuilder.updateBook(obj));
    }
}
interface PartialBook{
    title : string,
    author : string
}