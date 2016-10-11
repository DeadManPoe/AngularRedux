import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {StoreModule} from "@ngrx/store";
import {initialState} from "./state/state";
import {filtersReducer} from "./state/filter-reducer";
import {booksReducer} from "./state/book-reducer";
import {BookListComponent} from "./book-list/book-list.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import { BookSearchComponent } from './book-search/book-search.component';
import {queryBookReducer} from "./state/query-book-reducer";
import {queryKeywordsReducer} from "./state/query-keywords-reducer";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        AddBookComponent,
        EditBookComponent,
        BookSearchComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        StoreModule.provideStore({
            queryKeywords : queryKeywordsReducer,
            queryResults : queryBookReducer,
            books: booksReducer,
            filter: filtersReducer
        }, initialState)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
