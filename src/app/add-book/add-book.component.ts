import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {BookActionBuilder} from "../state/book-action-builder";

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.sass']
})
export class AddBookComponent implements OnInit {
    public addBookForm: FormGroup;
    private formSubmitted: boolean;
    private id: number;

    constructor(private _store: Store<State>, private _fb: FormBuilder) {
        this.id = 0;
    }

    ngOnInit() {
        this.formSubmitted = false;
        this.addBookForm = this._fb.group({
            'title': new FormControl('', [<any>Validators.required]),
            'author': new FormControl('', [<any>Validators.required])
        });
    }

    submitAdd() {
        if (this.addBookForm.valid) {
            let targetObject = (<any>Object).assign({}, this.addBookForm.value, {
                id: ++this.id,
                cover: '',
                read: false
            });
            this.addBookForm.reset();
            this._store.dispatch(BookActionBuilder.addBook(targetObject));
        }
    }

}
