import {Component} from "@angular/core";
import {State} from "./state/state";
import {NgRedux} from "ng2-redux";
import {UserActionBuilder} from "./state/user-action-builder";
import {Router} from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    constructor(private _redux : NgRedux<State>, private  _router: Router){

    }
    logout(){
        window.localStorage.removeItem('jwt');
        this._redux.dispatch(UserActionBuilder.setMode('NOT_LOGGED'));
        this._redux.dispatch(UserActionBuilder.setUserInfo({}));
        this._router.navigateByUrl('/login');
    }
}
