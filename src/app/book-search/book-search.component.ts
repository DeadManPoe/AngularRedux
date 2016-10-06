import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {GoogleBooksApiService} from "../google-books-api.service";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';




@Component({
    selector: 'app-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.sass'],
    providers : [GoogleBooksApiService]
})
export class BookSearchComponent implements OnInit {
    public searchControl : FormControl;

    constructor(private _gbooksService : GoogleBooksApiService) {
        this.searchControl = new FormControl('');
    }

    ngOnInit() {
        this.searchControl.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(values => this._gbooksService.getSearchResults(values))
            .map(values => values.items)
            .subscribe(results => {
                console.log(results);
            })
    }

}
