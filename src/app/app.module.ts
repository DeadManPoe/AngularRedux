import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {initialState} from './state/state';
import {filtersReducer} from './state/filters-reducer';
import {booksReducer} from './state/books-reducer';
import {BookListComponent} from './book-list/book-list.component';
import {BookFormComponent} from './book-form/book-form.component';
import { EditBookComponent } from './edit-book/edit-book.component';


@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookFormComponent,
        EditBookComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        StoreModule.provideStore({
            books: booksReducer,
            filter: filtersReducer
        }, initialState)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
