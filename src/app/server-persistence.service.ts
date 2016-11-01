import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Book} from "./book";
import {urls} from "./urls";
import {UrifyService} from "./urify.service";
import {HeadersMiddlewareService} from "./headers-middleware.service";

@Injectable()
export class ServerPersistenceService {

    constructor(private _http: Http, private  _urify : UrifyService, private _headers_mid : HeadersMiddlewareService) {
    }

    persistBook(book : Book){
        return this._http.post(urls.books(''),this._urify.urify(book),{
            headers : this._headers_mid.postContentType(this._headers_mid.applyJwt(new Headers()))
        }).map(response => response.json());
    }
    removeBook(bookId : number){
        return this._http.delete(urls.books(bookId),{
            headers : this._headers_mid.applyJwt(new Headers())
        }).map(response => response.json());
    }
    updateBook(bookId : number, book : any){
        return this._http.put(urls.books(bookId), this._urify.urify(book), {
            headers : this._headers_mid.applyJwt(new Headers())
        }).map(response => response.json());
    }


}
