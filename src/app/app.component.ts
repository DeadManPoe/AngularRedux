import { Component} from '@angular/core';
import { Store} from '@ngrx/Store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  constructor(private _store : Store<any>){
    _store.subscribe((state)=>{
      console.log(state);
    })
  }

  getState(){
    console.log(this._store);
  }
}
