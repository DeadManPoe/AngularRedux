import {Component, Input, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {BooksActionBuilder} from "../state/books-action-builder";
import {Book} from "../book";
import {List} from "immutable";
import {Output} from "@angular/core/src/metadata/directives";


@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
    @Input() books: Observable<List<Book>>;
    @Output() bookToBeUpdated = new EventEmitter();

    public partialBook : PartialBook;

    public updatingBookId : number;

    constructor(private _store: Store<State> ) {
        this.partialBook = {
            author : '',
            title : ''
        };
        this.updatingBookId = 0;
    }
    removeBook(bookId : number) {
        this._store.dispatch(BooksActionBuilder.removeBook(bookId));
    }

    toggleReadBook(bookId : number){
        this._store.dispatch(BooksActionBuilder.toggleRead(bookId));
    }

    emitUpdateEvent(book : Book){
        alert('dsadas');
        this.bookToBeUpdated.emit(book);
    }
}
interface PartialBook{
    title : string,
    author : string
}