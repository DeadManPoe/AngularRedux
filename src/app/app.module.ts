import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {StoreModule} from "@ngrx/store";
import {initialState} from "./state/state";
import {filtersReducer} from "./state/filter-reducer";
import {booksReducer} from "./state/book-reducer";
import {BookCollectionComponent} from "./smart-components/book-collection/book-collection.component";
import {AddBookComponent} from "./dumb-components/add-book/add-book.component";
import {EditBookComponent} from "./dumb-components/edit-book/edit-book.component";
import { BookSearchComponent } from './smart-components/book-search/book-search.component';
import {queryBookReducer} from "./state/query-book-reducer";
import {queryKeywordsReducer} from "./state/query-keywords-reducer";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { BookListComponent } from './dumb-components/book-list/book-list.component';
import { BookFilterComponent } from './dumb-components/book-filter/book-filter.component';
import { SearchResultsComponent } from './dumb-components/search-results/search-results.component';
import { PageNotFoundComponent } from './dumb-components/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        AddBookComponent,
        EditBookComponent,
        BookSearchComponent,
        BookCollectionComponent,
        BookListComponent,
        BookFilterComponent,
        SearchResultsComponent,
        PageNotFoundComponent
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
            filters: filtersReducer
        }, initialState)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
