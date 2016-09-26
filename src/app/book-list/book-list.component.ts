import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {BooksActionBuilder} from "../state/books-action-builder";
import {Book} from "../book";


@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
    @Input() books: Observable<any>;
    public partialBook : PartialBook;

    public updateMode : UpdateMode;

    constructor(private _store: Store<State> ) {
        this.partialBook = {
            author : '',
            title : ''
        };
        this.updateMode = {
            updatingBook : 0
        };
    }
    updatePartialBook(title: string, author: string){
        if(author){
            this.partialBook.author = author;
        }
        if(title){
            this.partialBook.title = title;
        }
    }
    toggleUpdateMode(id : number){
        this.updateMode.updatingBook = id;
    }
    removeBook(bookId : number) {
        this._store.dispatch(BooksActionBuilder.removeBook(bookId));
    }

    toggleReadBook(bookId : number){
        this._store.dispatch(BooksActionBuilder.toggleRead(bookId));
    }
    updateBook(book : Book){
        this.toggleUpdateMode(0);
        var obj = (<any>Object).assign({},book,this.partialBook);
        console.log(obj);
        this._store.dispatch(BooksActionBuilder.updateBook(obj));
        this._store.take(1).subscribe(s => console.log(s));
    }
}
interface UpdateMode{
    updatingBook : number,
}
interface PartialBook{
    title : string,
    author : string
}