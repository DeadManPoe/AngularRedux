import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _auth: AuthService, private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        let path = route.url[0].path;
        let userHasToken = this._auth.checkToken();
        switch(path){
            case 'login': {
                if(userHasToken){
                    this._router.navigateByUrl('/collection');
                }
                else{
                    return true;
                }
                break;
            }
            default : {
                if(!userHasToken){
                    this._router.navigateByUrl('/login');
                }
                else {
                    return true;
                }
                break;
            }

        }
    }
}