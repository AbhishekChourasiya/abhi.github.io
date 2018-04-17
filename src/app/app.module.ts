import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpModule],
  declarations: [ AppComponent,UserComponent ,AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }