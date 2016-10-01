/* tslint:disable:no-unused-variable */

import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {BookListComponent} from "./book-list/book-list.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {FormBuilder} from "@angular/forms";
import {Store, Action, provideStore, StoreModule} from "@ngrx/store";
import {State, initialState} from "./state/state";
import {booksReducer} from "./state/book-reducer";
import {filtersReducer} from "./state/filter-reducer";

describe('App: ReduxAngular', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                BookListComponent,
                AddBookComponent,
                EditBookComponent
            ],
            providers : [FormBuilder]
        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
