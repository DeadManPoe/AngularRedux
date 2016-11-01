import {Injectable} from "@angular/core";
import {Headers} from "@angular/http";

@Injectable()
export class HeadersMiddlewareService {

    constructor() {
    }

    postContentType(headers : Headers){
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    }

    applyJwt(headers : Headers){
        headers.append('x-access-token',window.localStorage.getItem('jwt'));
        return headers;
    }


}
