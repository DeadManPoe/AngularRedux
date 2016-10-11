import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {GoogleBooksApiService} from "../google-books-api.service";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {Store} from "@ngrx/store";
import {QueryActionBuilder} from "../state/query-action-builder";
import {State} from "../state/state";
import {empty} from "rxjs/observable/empty";




@Component({
    selector: 'app-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.sass'],
    providers : [GoogleBooksApiService]
})
export class BookSearchComponent implements OnInit {
    public searchControl : FormControl;

    constructor(private _gbooksService : GoogleBooksApiService, private _store : Store<State>) {
        this.searchControl = new FormControl('');
    }

    ngOnInit() {
        this.searchControl.valueChanges
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(values =>
                this.checkInput(values)
            )
            .subscribe(results => {
                this._store.dispatch(QueryActionBuilder.queryBook(results));
            })
    }
    checkInput(values){
        this._store.dispatch(QueryActionBuilder.setQueryKeywords(values));
        if(values){
            return this._gbooksService.getSearchResults(values);
        }
        this._store.dispatch(QueryActionBuilder.queryBook([]));
        return empty();
    }

}
