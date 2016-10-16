import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {Observable} from "rxjs";
import {BookActionBuilder} from "../state/book-action-builder";
import {FilterMap} from "../filter-map";
import {FilterActionBuilder} from "../state/filter-action-builder";

@Component({
    selector: 'app-book-collection',
    templateUrl: 'book-collection.component.html',
    styleUrls: ['book-collection.component.sass']
})
export class BookCollectionComponent {
    public books : Observable<any>;
    public filters : Observable<any>;
    constructor(private _store : Store<State>){
        this.books = _store.select('books');
        this.filters = _store.select('filters');
    }
    ngOnInit(){

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

}