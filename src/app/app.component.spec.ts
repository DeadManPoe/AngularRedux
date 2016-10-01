/* tslint:disable:no-unused-variable */

import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {BookListComponent} from "./book-list/book-list.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";

describe('App: ReduxAngular', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                BookListComponent,
                AddBookComponent,
                EditBookComponent
            ],
        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
