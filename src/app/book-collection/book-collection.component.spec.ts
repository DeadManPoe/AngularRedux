/* tslint:disable:no-unused-variable */

import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {BookListComponent} from "./book-collection.component";
import {Observable} from "rxjs";
import {By} from "@angular/platform-browser";
import {Store, Action} from "@ngrx/store";
describe('Component : BookList', ()=> {
    var fixture : ComponentFixture, comp;
    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            declarations: [BookListComponent],
            providers : [{provide: Store, useValue: {
                dispatch : (action : Action)=>{

                }
            } }]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BookListComponent);
        comp = fixture.componentInstance;
        comp.filter = 'NONE';
        fixture.detectChanges(); // trigger initial data binding
    });
    it('Should display the initial read filter value',()=>{
        let filterDisplayedValue = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(filterDisplayedValue.textContent).toBe('FILTER : NONE');
    });
    it('Toggle filter button click should cause the filter to be toggled',()=>{
        let button = fixture.debugElement.query(By.css('#aba')).nativeElement;
        button.click();
        let filterDisplayedValue = fixture.debugElement.query(By.css('h3')).nativeElement;
        console.log(filterDisplayedValue.textContent);
    })

});