import {Component, OnInit, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {State} from "../../state/state";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'app-add-book',
    templateUrl: 'add-book.component.html',
    styleUrls: ['add-book.component.sass'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class AddBookComponent implements OnInit {
    @Output() addBook = new EventEmitter();
    public addBookForm: FormGroup;
    public formVisible : boolean;
    private formSubmitted: boolean;
    private id: number;

    constructor(private _store: Store<State>, private _fb: FormBuilder) {
        this.formVisible = false;
        this.id = 0;
    }

    ngOnInit() {
        this.formSubmitted = false;
        this.addBookForm = this._fb.group({
            'title': new FormControl('', [<any>Validators.required]),
            'author': new FormControl('', [<any>Validators.required])
        });
    }
    openAddBookForm(){
        this.formVisible = true;
    }

    addBookM() {
        if (this.addBookForm.valid) {
            let targetObject = (<any>Object).assign({}, this.addBookForm.value, {
                id: ++this.id,
                cover: '',
                read: false
            });
            this.addBookForm.reset();
            this.formSubmitted = false;
            this.formVisible = false;
            this.addBook.emit(targetObject);
        }
    }

}
