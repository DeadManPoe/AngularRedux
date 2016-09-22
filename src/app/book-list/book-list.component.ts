import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {BooksActionBuilder} from "../state/books-action-builder";


@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
    @Input() books: Observable<any>;


    constructor(private _store: Store<State> ) {}

    removeBook(bookId : number) {
        this._store.dispatch(BooksActionBuilder.removeBook(bookId));
    }

    toggleReadBook(bookId : number){
        this._store.dispatch(BooksActionBuilder.toggleRead(bookId));
    }
}
