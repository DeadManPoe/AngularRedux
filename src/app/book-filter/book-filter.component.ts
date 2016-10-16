import {Component, OnInit, EventEmitter} from "@angular/core";
import {Input, Output} from "@angular/core/src/metadata/directives";
import {FilterMap} from "../filter-map";

@Component({
    selector: 'app-book-filter',
    templateUrl: './book-filter.component.html',
    styleUrls: ['./book-filter.component.sass']
})
export class BookFilterComponent implements OnInit {
    @Input() filters : FilterMap;
    @Output() changeFilter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    changeFilterM(filterObject : FilterMap){
        this.changeFilter.emit(filterObject)
    }

}
