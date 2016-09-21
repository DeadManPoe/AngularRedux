import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {StoreModule, Store} from '@ngrx/store';
import {initialState} from './state/state';
import {filtersReducer} from './state/filters-reducer';
import {booksReducer} from './state/books-reducer';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
    books : booksReducer,
    filter : filtersReducer
  }, initialState)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
