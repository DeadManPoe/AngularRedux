import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {List} from 'immutable'
import {Book} from '../book'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {
  @Input()
  books: Observable<any>;
  constructor() { }
  ngOnInit() {
  }

}
