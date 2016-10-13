import {Injectable} from "@angular/core";

@Injectable()
export class TryoutServiceService {
    public items;
    constructor() {
        this.items = [];
    }
    getItems(){
        return this.items;
    }
    add(a){
        this.items.push(a);
    }

}
