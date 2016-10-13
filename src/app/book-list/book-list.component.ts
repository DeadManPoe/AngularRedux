import {Component, Input, ChangeDetectionStrategy, EventEmitter} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {BookActionBuilder} from "../state/book-action-builder";
import {Book} from "../book";
import {List} from "immutable";
import {Output} from "@angular/core/src/metadata/directives";
import {FilterActionBuilder} from "../state/filter-action-builder";
import {TryoutServiceService} from "../tryout-service.service";


@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass']
})
export class BookListComponent {
    public books : Observable<any>;
    public filter : Observable<any>;

    constructor(private _store: Store<State>) {
        this.books = _store.select('books');
        this.filter = _store.select('filter');
    }

    removeBook(bookId: number) {
        this._store.dispatch(BookActionBuilder.removeBook(bookId));
    }

    toggleReadBook(bookId: number) {
        this._store.dispatch(BookActionBuilder.toggleRead(bookId));
    }

    toggleReadFilter() {
        this._store.dispatch(FilterActionBuilder.readFilter());

    }
}