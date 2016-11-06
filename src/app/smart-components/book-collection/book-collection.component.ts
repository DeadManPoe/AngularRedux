import {Component} from "@angular/core";
import {State, BooksInterface} from "../../state/state";
import {Observable} from "rxjs";
import {BookActionBuilder} from "../../state/book-action-builder";
import {FilterActionBuilder} from "../../state/filter-action-builder";
import {Book} from "../../book";
import {combineLatest} from "rxjs/observable/combineLatest";
import {select, NgRedux} from "ng2-redux";
import {ServerPersistenceService} from "../../server-persistence.service";
import {UID} from "../../uid";

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

    constructor(private _store: NgRedux<State>, private _server: ServerPersistenceService) {
        this.bookToBeEdited = {
            id: 0,
            title: '',
            description: '',
            author: '',
            cover: '',
            read: false
        };
        this.books = combineLatest(
            _store.select('books'),
            _store.select('filters'),
            (books, filters)=> {
                return books.books.filter((val : Book)=> {
                    return (!filters.readBooks || val.read)
                })
            });
        _store.select('books').subscribe((val : BooksInterface)=>{
            if(val.side_effects.errors.last()){
                if(val.side_effects.errors.last().error.status === 403){
                    window.alert(403);
                }
            }

        })
    }

    ngOnInit() {
        this.getBooks();
    }

    addBook(book: Book) {
        let action = BookActionBuilder.addBook(book);
        let id = UID.generate();
        this._store.dispatch(action);
        this._store.dispatch(BookActionBuilder.persistOnDb(action, 'START', id, null));
        this._server.persistBook(book).subscribe(
            data => {
                this._store.dispatch(BookActionBuilder.persistOnDb(action, 'END', id, null));
                this._store.dispatch(BookActionBuilder.updateBook(book.id, {
                    id: data.id
                }));
            },
            err => {
                this._store.dispatch(BookActionBuilder.persistOnDb(action, 'ERRORED', id, err))
            }
        )

    }

    getBooks() {
        let action = BookActionBuilder.getBooks();
        let id = UID.generate();
        this._store.dispatch(action);
        this._store.dispatch(BookActionBuilder.persistOnDb(action, 'START', id, null));
        this._server.getBooks().subscribe(
            data => {
                this._store.dispatch(BookActionBuilder.persistOnDb(action, 'END', id, null));
                data.books.forEach((book)=> {
                    this._store.dispatch(BookActionBuilder.addBook(book));
                });
            },
            err => {
                this._store.dispatch(BookActionBuilder.persistOnDb(action, 'ERRORED', id, err))
            }
        )
    }

    removeBook(bookId: number) {
        let action = BookActionBuilder.removeBook(bookId);
        let id = UID.generate();
        this._store.dispatch(action);
        this._store.dispatch(BookActionBuilder.persistOnDb(action, 'START', id, null));
        this._server.removeBook(bookId).subscribe(
            data => {
                this._store.dispatch(BookActionBuilder.persistOnDb(action, 'END', id, null));
            },
            err => {
                this._store.dispatch(BookActionBuilder.persistOnDb(action, 'ERRORED', id, err))
            }
        );
    }

    editBook(object) {
        let action = BookActionBuilder.updateBook(object.bookId, object.book);
        let id = UID.generate();
        this._store.dispatch(action);
        this._store.dispatch(BookActionBuilder.persistOnDb(action, 'START', id, null));
        this._server.updateBook(object.bookId, object.book).subscribe(
            data => {
                this._store.dispatch(BookActionBuilder.persistOnDb(action, 'END', id, null))
            },
            err => {
                this._store.dispatch(BookActionBuilder.persistOnDb(action, 'ERRORED', id, err))
            }
        )
    }

    changeFilter(filters: any) {
        this._store.dispatch(FilterActionBuilder.changeFilters(filters));
    }

    toggleBookRead(bookId: number) {
        this._store.dispatch(BookActionBuilder.toggleRead(bookId));
    }

    updateBook(book: Book) {
        this.bookToBeEdited = book;
    }
}