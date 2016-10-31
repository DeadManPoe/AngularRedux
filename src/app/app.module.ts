import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {initialState, State} from "./state/state";
import {BookCollectionComponent} from "./smart-components/book-collection/book-collection.component";
import {AddBookComponent} from "./dumb-components/add-book/add-book.component";
import {EditBookComponent} from "./dumb-components/edit-book/edit-book.component";
import { BookSearchComponent } from './smart-components/book-search/book-search.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { BookListComponent } from './dumb-components/book-list/book-list.component';
import { BookFilterComponent } from './dumb-components/book-filter/book-filter.component';
import { SearchResultsComponent } from './dumb-components/search-results/search-results.component';
import { PageNotFoundComponent } from './dumb-components/page-not-found/page-not-found.component';
import {NgReduxModule, NgRedux} from "ng2-redux";
import {rootReducer} from "./state/root-reducer";
import { HomeComponent } from './smart-components/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const createLogger = require('redux-logger');


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
        PageNotFoundComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgReduxModule,
        RouterModule.forRoot(routes),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<State>) {
        ngRedux.configureStore(rootReducer, initialState, [createLogger()]);
    }
}
