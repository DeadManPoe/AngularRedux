import {Component, OnInit, EventEmitter} from "@angular/core";
import {Input, Output} from "@angular/core/src/metadata/directives";
import {Observable} from "rxjs";
import {List} from "immutable";
import {Book} from "../book";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {

    @Input() books : Observable<List<Book>>;
    @Output() toggleBookRead = new EventEmitter();
    @Output() removeBook = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    toggleBookReadM(bookId : number){
        this.toggleBookRead.emit(bookId);
    }
    removeBookM(bookId : number){
        this.removeBook.emit(bookId);
    }

}
