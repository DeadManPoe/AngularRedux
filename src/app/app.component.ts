import {Component} from "@angular/core";
import {State, initialState} from "./state/state";
import {NgRedux} from "ng2-redux";
import {rootReducer} from "./state/root-reducer";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {

}
