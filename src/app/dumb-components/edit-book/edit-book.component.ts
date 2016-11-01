import {Component, OnInit, SimpleChange, OnChanges, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import {Book} from "../../book";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'app-edit-book',
    templateUrl: 'edit-book.component.html',
    styleUrls: ['edit-book.component.sass'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class EditBookComponent implements OnInit, OnChanges {
    @Input() sourceBook: Book;
    @Output() editBook = new EventEmitter();
    public isHidden: boolean;
    public editForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.isHidden = true;
        this.editForm = this._fb.group({
            title: new FormControl('', [<any>Validators.required]),
            author: new FormControl('', [<any>Validators.required])
        });
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        for (let prop in changes) {
            if ((prop === 'sourceBook') && (this.sourceBook.id !== 0)) {
                this.editForm = this._fb.group({
                    title: new FormControl(this.sourceBook.title, [<any>Validators.required]),
                    author: new FormControl(this.sourceBook.author, [<any>Validators.required])
                });
                this.isHidden = false;
            }
        }
    }

    ngOnInit() {

    }

    closeEdit() {
        this.isHidden = true;
    }

    submitEdit() {
        if (this.editForm.valid) {
            let targetObj = this.editForm.value;
            this.editBook.emit({
                bookId : this.sourceBook.id,
                book : targetObj
            });
            //confirm msg
            this.isHidden = true;
        }
    }

}
