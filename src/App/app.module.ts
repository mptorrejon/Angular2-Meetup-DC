import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RightComponent as Right }   from './right.component';
import { LeftComponent as Left} from './left.component';

import { LifeCycleExamples } from '../ComponentLifeCycle/lifecycle.component';
import { Wikipedia } from '../RxJS/rxjs.component';
import { WikipediaService } from '../RxJS/rxjs.service';

import { Http } from '@angular/http';
import { HttpModule, JsonpModule }  from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ Right, Left, LifeCycleExamples, Wikipedia ],
  providers: [ WikipediaService, Http ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
