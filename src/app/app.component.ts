import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store'
import {State} from './state/state'
import {BooksActionBuilder} from "./state/books-action-builder";
import {FilterActionBuilder} from "./state/filter-action-builder";
import {combineLatest} from "rxjs/observable/combineLatest";
import {Book} from "./book";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    public books: Observable<any>;
    public filter: Observable<any>;
    public exchangeBook : Book;
    private id: number;
    public title: string;
    public author: string;

    constructor(private _store: Store<State>) {
        this.exchangeBook = {
            id : 0,
            title : '',
            author : '',
            cover : '',
            read : false
        };
        this.filter = _store.select('filter');
        this.books = combineLatest(
            _store.select('books'),
            _store.select('filter'),
            (books, filter)=> {
                return books.filter((val)=> {
                    if (filter === 'READ_FILTER' && !val.read) {
                        return false;
                    }
                    return true;

                })
            });

        this.id = 0;
    }
    open(book: Book) {
        this.exchangeBook = book;
    }

    addBook() {
        this._store.dispatch(BooksActionBuilder.addBook({
            id: ++this.id,
            title: this.title,
            author: this.author,
            cover: '',
            read: false
        }))
    }

    removeBook(id: number) {
        this._store.dispatch(BooksActionBuilder.removeBook(id));
    }

    toggleReadFilter() {
        this._store.dispatch(FilterActionBuilder.readFilter());

    }

    toggleBookRead(id: number) {
        this._store.dispatch(BooksActionBuilder.toggleRead(id));
    }
}
