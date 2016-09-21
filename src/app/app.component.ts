import { Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from './book';
import {List} from 'immutable';
import {Store} from '@ngrx/store'
import {State} from './state/state'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public books : Observable<any>;
  public filter : Observable<any>;
  public title : string;
  public author : string;
  constructor(private _store : Store<State>){
    this.books = _store.select('books');
    this.filter = _store.select('filter');
  }
  addBook(){
    this._store.dispatch({
      type: 'ADD_BOOK',
      payload : {
        id: 1,
        author: 'Author',
        title : 'Title',
        cover : 'none'
      }
    })
  }
}
