import { Component, Inject } from '@angular/core';
import { ItemActions} from './state/item-actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  appStore = null;

  constructor(
    @Inject('AppStore') a, 
   private itemActions: ItemActions){
     this.itemActions = itemActions;
     this.appStore = a;
   }

   getState(){
     console.log(this.appStore.getState());
   }
}
