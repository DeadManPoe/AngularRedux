import {Component, OnInit, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'app-book-filter',
    templateUrl: 'book-filter.component.html',
    styleUrls: ['book-filter.component.sass'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class BookFilterComponent implements OnInit {
    @Input() filters;
    @Output() changeFilter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    changeFilterM(filterObject : any){
        let targetObject = (<any>Object).assign({}, this.filters, filterObject);
        this.changeFilter.emit(targetObject);
    }

}
