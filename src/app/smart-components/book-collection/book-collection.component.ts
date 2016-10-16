import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {State} from "../../state/state";
import {Observable} from "rxjs";
import {BookActionBuilder} from "../../state/book-action-builder";
import {FilterMap} from "../../filter-map";
import {FilterActionBuilder} from "../../state/filter-action-builder";
import {Book} from "../../book";
import {combineLatest} from "rxjs/observable/combineLatest";

@Component({
    selector: 'app-book-collection',
    templateUrl: 'book-collection.component.html',
    styleUrls: ['book-collection.component.sass']
})
export class BookCollectionComponent {
    public books : Observable<any>;
    public filters : Observable<any>;
    public bookToBeEdited : Object;
    constructor(private _store : Store<State>){
        this.bookToBeEdited = {
            id : 0,
            title : '',
            description : '',
            author : '',
            cover : '',
            read : false
        };
        this.filters = _store.select('filters');
        this.books = combineLatest(
            _store.select('books'),
            _store.select('filters'),
            (books, filters)=> {
                return books.filter((val)=> {
                    return (!filters.readBooks || val.read)
                })
            });
    }
    ngOnInit(){

    }
    addBook(book : Book){
        this._store.dispatch(BookActionBuilder.addBook(book));
    }
    removeBook(bookId : number){
        this._store.dispatch(BookActionBuilder.removeBook(bookId));
    }
    changeFilter(filters : FilterMap){
        this._store.dispatch(FilterActionBuilder.changeFilters(filters));
    }
    toggleBookRead(bookId : number){
        this._store.dispatch(BookActionBuilder.toggleRead(bookId));
    }
    updateBook(book : Book){
        this.bookToBeEdited = book;
    }
    editBook(book : Book){
        this._store.dispatch(BookActionBuilder.updateBook(book));
    }

}