import {Injectable} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {urls} from "./urls";

@Injectable()
export class AuthService {

    constructor(private _http: Http) {
    }

    login(loginInfo : LoginInfo){
        let headers = new Headers();
        let body = new URLSearchParams();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        body.append('email',loginInfo.email);
        body.append('password',loginInfo.password);
        body.append('remember',loginInfo.remember.toString());

        return this._http.post(urls.login,body.toString(),{
            headers : headers
        }).map(response => response.json())
    }



}
interface LoginInfo{
    email : string,
    password : string,
    remember : boolean
}
