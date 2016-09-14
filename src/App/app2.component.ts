import { Component } from '@angular/core';

@Component({
  selector: 'my-app2',
  template: `<h3>My First Angular 
  				<span class="version">{{version}}</span> 
  				App
  			</h3>`,
  styles:[`
  	.version{ color:blue; }
  `]

})
export class AppComponent2 {
	version:number = 0;
	
	constructor(){
		this.version = 3;
	}
}