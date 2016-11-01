import {Injectable} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {urls} from "./urls";

@Injectable()
export class AuthService {

    constructor(private _http: Http) {
    }

    urify(params : Object){
        let headers = new Headers();
        let body = new URLSearchParams();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        for(let key in params){
            body.append(key, params[key]);
        }
        return {
            body : body,
            headers : headers
        }
    }

    login(loginInfo: LoginInfo) {
        let requestInfo = this.urify(loginInfo);

        return this._http.post(urls.login, requestInfo.body.toString(), {
            headers: requestInfo.headers
        }).map(response => response.json())
    }

    register(registerInfo: RegisterInfo){
        let requestInfo = this.urify(registerInfo);
        return this._http.post(urls.register, requestInfo.body.toString(), {
            headers : requestInfo.headers
        }).map(response => response.json())
    }

    checkToken(){
        return !!window.localStorage.getItem('jwt');
    }


}
interface RegisterInfo{
    email : string,
    password : string
}
interface LoginInfo{
    email : string,
    password : string,
    remember : boolean
}
