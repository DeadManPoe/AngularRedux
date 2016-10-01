import {Component, OnInit, SimpleChange, OnChanges} from '@angular/core';
import {Book} from "../book";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {Store} from "@ngrx/store";
import {State} from "../state/state";
import {Input} from "@angular/core/src/metadata/directives";
import {BookActionBuilder} from "../state/book-action-builder";

@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.sass']
})
export class EditBookComponent implements OnInit, OnChanges {
    @Input() sourceBook : Book;
    public isHidden : boolean;
    public editForm : FormGroup;

    constructor(private _fb: FormBuilder, private _store : Store<State>) {
        this.sourceBook = {
            id : 0,
            title : '',
            author : '',
            cover : '',
            read : false
        };
        this.isHidden = true;
        this.editForm = this._fb.group({
            title : new FormControl('',[<any>Validators.required]),
            author : new FormControl('',[<any>Validators.required])
        });
    }
    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        for(let prop in changes){
            if(prop === 'sourceBook' && this.sourceBook.id !==0){
                console.log(this.sourceBook);
                this.editForm = this._fb.group({
                    title : new FormControl(this.sourceBook.title,[<any>Validators.required]),
                    author : new FormControl(this.sourceBook.author,[<any>Validators.required])
                });
                this.isHidden = false;

            }
        }
    }

    ngOnInit() {

    }
    closeEdit(){
        this.isHidden = true;
    }
    submitEdit(){
        if(this.editForm.valid){
            let targetObj = (<any>Object).assign({},this.sourceBook, this.editForm.value);
            this._store.dispatch(BookActionBuilder.updateBook(targetObj));
            //confirm msg
            this.isHidden = true;
        }
    }

}
