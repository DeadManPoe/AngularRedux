import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {State} from "./state/state";
import {combineLatest} from "rxjs/observable/combineLatest";
import {Book} from "./book";
import {BookActionBuilder} from "./state/book-action-builder";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {

    constructor() {}
}
