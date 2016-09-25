import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {BooksActionBuilder} from "../state/books-action-builder";

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.sass']
})
export class BookFormComponent implements OnInit {
    public addBookForm : FormGroup;
    private formSubmitted : boolean;
    private id : number;

    constructor(private _store: Store<State>, private _fb: FormBuilder) {
        this.id = 0;
    }

    ngOnInit() {
        this.formSubmitted = false;
        this.addBookForm = this._fb.group({
            'title' : new FormControl('',[<any>Validators.required]),
            'author' : new FormControl('',[<any>Validators.required])
        });
    }

    save(value: FormValues, isValid : boolean ){
        this.formSubmitted = true;
        if(isValid){
            this._store.dispatch(BooksActionBuilder.addBook((<any>Object).assign({},value,{
                id : ++this.id,
                cover : '',
                read : false
            })));
        }
    }

}
interface FormValues {
    title : string,
    author: string
}
