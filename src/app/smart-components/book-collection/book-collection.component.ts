import {Component} from "@angular/core";
import {State} from "../../state/state";
import {Observable} from "rxjs";
import {BookActionBuilder} from "../../state/book-action-builder";
import {FilterMap} from "../../filter-map";
import {FilterActionBuilder} from "../../state/filter-action-builder";
import {Book} from "../../book";
import {combineLatest} from "rxjs/observable/combineLatest";
import {select, NgRedux} from "ng2-redux";
import {ServerPersistenceService} from "../../server-persistence.service";

@Component({
    selector: 'app-book-collection',
    templateUrl: 'book-collection.component.html',
    styleUrls: ['book-collection.component.sass'],
    providers: [ServerPersistenceService]
})
export class BookCollectionComponent {

    public books: Observable<any>;
    @select('filters') filters: Observable<any>;
    public bookToBeEdited: Object;

    constructor(private ngRedux: NgRedux<State>, private _server: ServerPersistenceService) {
        this.bookToBeEdited = {
            id: 0,
            title: '',
            description: '',
            author: '',
            cover: '',
            read: false
        };
        this.books = combineLatest(
            ngRedux.select('books'),
            ngRedux.select('filters'),
            (books, filters)=> {
                return books.filter((val)=> {
                    return (!filters.readBooks || val.read)
                })
            });
    }

    ngOnInit() {

    }

    addBook(book: Book) {
        this.ngRedux.dispatch(BookActionBuilder.addBook(book));
        this._server.persistBook(book).subscribe(val => {
            this.ngRedux.dispatch(BookActionBuilder.updateBook(book.id, {
                id : val.id
            }))
        })

    }

    removeBook(bookId: number) {
        this.ngRedux.dispatch(BookActionBuilder.removeBook(bookId));
        this._server.removeBook(bookId).subscribe(val => {

        })
    }

    changeFilter(filters: FilterMap) {
        this.ngRedux.dispatch(FilterActionBuilder.changeFilters(filters));
    }

    toggleBookRead(bookId: number) {
        this.ngRedux.dispatch(BookActionBuilder.toggleRead(bookId));
    }

    updateBook(book: Book) {
        this.bookToBeEdited = book;
    }

    editBook(object) {
        this.ngRedux.dispatch(BookActionBuilder.updateBook(object.bookId, object.book));
        this._server.updateBook(object.bookId, object.book).subscribe()
    }

}