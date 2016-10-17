import {Component} from "@angular/core";
import {State} from "../../state/state";
import {Observable} from "rxjs";
import {BookActionBuilder} from "../../state/book-action-builder";
import {FilterMap} from "../../filter-map";
import {FilterActionBuilder} from "../../state/filter-action-builder";
import {Book} from "../../book";
import {combineLatest} from "rxjs/observable/combineLatest";
import {select, NgRedux} from "ng2-redux";

@Component({
    selector: 'app-book-collection',
    templateUrl: 'book-collection.component.html',
    styleUrls: ['book-collection.component.sass'],
})
export class BookCollectionComponent {
    public books : Observable<any>;
    @select('filters') filters : Observable<any>;
    public bookToBeEdited : Object;
    constructor(private ngRedux : NgRedux<State>){
        this.bookToBeEdited = {
            id : 0,
            title : '',
            description : '',
            author : '',
            cover : '',
            read : false
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
    ngOnInit(){

    }
    addBook(book : Book){
        this.ngRedux.dispatch(BookActionBuilder.addBook(book));
    }
    removeBook(bookId : number){
        this.ngRedux.dispatch(BookActionBuilder.removeBook(bookId));
    }
    changeFilter(filters : FilterMap){
        this.ngRedux.dispatch(FilterActionBuilder.changeFilters(filters));
    }
    toggleBookRead(bookId : number){
        this.ngRedux.dispatch(BookActionBuilder.toggleRead(bookId));
    }
    updateBook(book : Book){
        this.bookToBeEdited = book;
    }
    editBook(book : Book){
        this.ngRedux.dispatch(BookActionBuilder.updateBook(book));
    }

}