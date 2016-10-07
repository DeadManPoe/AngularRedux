import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {URL} from "./google-books-api-url";
import 'rxjs/add/operator/map'

@Injectable()
export class GoogleBooksApiService {

    constructor(private _http: Http) {
    }

    getSearchResults(searchText: string) {
        return this._http.get(URL+searchText).map(values => values.json().items);
    }

}
