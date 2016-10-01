import {Component, Input, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {BookActionBuilder} from "../state/book-action-builder";
import {Book} from "../book";
import {List} from "immutable";
import {Output} from "@angular/core/src/metadata/directives";
import {FilterActionBuilder} from "../state/filter-action-builder";


@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
    @Input() books: Observable<List<Book>>;
    @Input() filter: Observable<string>;
    @Output() bookToBeEdited = new EventEmitter();

    constructor(private _store: Store<State> ) {
    }
    removeBook(bookId : number) {
        this._store.dispatch(BookActionBuilder.removeBook(bookId));
    }

    toggleReadBook(bookId : number){
        this._store.dispatch(BookActionBuilder.toggleRead(bookId));
    }
    toggleReadFilter() {
        this._store.dispatch(FilterActionBuilder.readFilter());

    }
    emitEditEvent(book : Book){
        this.bookToBeEdited.emit(book);
    }
}