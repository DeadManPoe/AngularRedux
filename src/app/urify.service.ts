import {Injectable} from "@angular/core";
import {URLSearchParams} from "@angular/http";

@Injectable()
export class UrifyService {

    constructor() {
    }
    urify(object: Object): Object {
        let urifiedObject = new URLSearchParams();
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                urifiedObject.append(key, object[key]);
            }
        }
        return urifiedObject;
    }


}
