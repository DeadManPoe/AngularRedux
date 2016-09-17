import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {createStore} from 'redux';
import {rootReducer} from './state/rootReducer'
import {ItemActions} from './state/item-actions'
import { AppComponent } from './app.component';

const appStore = createStore(rootReducer);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: 'AppStore', useValue: appStore },
    ItemActions 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
