import {Component, OnInit, EventEmitter} from "@angular/core";
import {Input, Output} from "@angular/core/src/metadata/directives";
import {Observable} from "rxjs";
import {Book} from "../book";
import {GoogleBook} from "../google-book";

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {
    @Input() books : Observable<any>;
    @Output() addToCollection = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }

    addToCollectionM(book : GoogleBook){
        this.addToCollection.emit(book);
    }

}
