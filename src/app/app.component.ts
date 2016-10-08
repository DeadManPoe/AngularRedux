import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {State} from "./state/state";
import {combineLatest} from "rxjs/observable/combineLatest";
import {Book} from "./book";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    public queryKeywords : Observable<any>;
    public queryResults: Observable<any>;
    public books: Observable<any>;
    public filter: Observable<any>;
    public exchangeBook: Book;
    private id: number;
    public title: string;
    public author: string;

    constructor(private _store: Store<State>) {
        this.exchangeBook = {
            id: 0,
            title: '',
            author: '',
            cover: '',
            read: false
        };
        this.queryKeywords = _store.select('queryKeywords');
        this.queryResults = _store.select('queryResults');
        this.filter = _store.select('filter');
        this.books = combineLatest(
            _store.select('books'),
            _store.select('filter'),
            (books, filter)=> {
                return books.filter((val)=> {
                    return !(filter === 'READ_FILTER' && !val.read);

                })
            });

        this.id = 0;
    }

    editBook(book: Book) {
        this.exchangeBook = book;
    }
}
