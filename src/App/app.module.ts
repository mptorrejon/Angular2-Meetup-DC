import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent1 as App1 }   from './app.component';
import { AppComponent2 as App2 }   from './app2.component';
import { LifeCycleExamples } from '../ComponentLifeCycle/lifecycle.component';
import { Wikipedia } from '../RxJS/rxjs.component';
import { WikipediaService } from '../RxJS/rxjs.service';

import { Http } from '@angular/http';
import { HttpModule, JsonpModule }  from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ App1, App2, LifeCycleExamples, Wikipedia ],
  providers: [ WikipediaService, Http ],
  bootstrap:    [ App1 ]
})
export class AppModule {}
