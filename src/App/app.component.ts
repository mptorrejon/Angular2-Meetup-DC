import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  				<h3>My First Angular <span class="version">{{version}}</span> App</h3>
  				<my-app2>Loading...</my-app2>

  				<button (click)="hasChild = !hasChild">{{hasChild ? 'Destroy' : 'Create'}} MyComponent</button>
    			
  				<life-cycle *ngIf="hasChild"></life-cycle>

  				<wikipedia></wikipedia>

  				<router-outlet></router-outlet>
  			`,
  styles:[`
  	.version{ color:red; }
  `]
})
export class AppComponent1  {
	version:number = 0;
	
	constructor(){
		this.version = 3;
	}
}