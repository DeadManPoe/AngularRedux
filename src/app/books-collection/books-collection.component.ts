import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {State} from "../state/state";
import {Store} from "@ngrx/store";
import {BookActionBuilder} from "../state/book-action-builder";

@Component({
  selector: 'app-books-collection',
  templateUrl: './books-collection.component.html',
  styleUrls: ['./books-collection.component.sass']
})
export class BooksCollectionComponent implements OnInit {

  constructor(private _store : Store<State>) { }

  ngOnInit() {
  }

  addBook(book : Book){
      this._store.dispatch(BookActionBuilder.addBook(book));
  }
  removeBook(bookId : number){
      this._store.dispatch(BookActionBuilder.removeBook(bookId));
  }


}
