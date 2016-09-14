import { Component } from '@angular/core';

@Component({
	selector: 'my-app'
	,template: `
		<h3>My First Angular <span class="version">{{version}}</span> App</h3>

		<!--UNCOMMENT AS NEEDED-->		
		
		<!--<left-component which="left"></left-component> | -->
		<!-- <right-component which="right"></right-component> -->

		<!-- <button (click)="hasChild = !hasChild">{{hasChild ? 'Destroy' : 'Create'}} MyComponent</button> -->
	
		<!-- <life-cycle *ngIf="hasChild"></life-cycle> -->

		<!-- <wikipedia></wikipedia> -->
	`
	,styles:[`
		button{display:block; margin: 10px 0px; padding: 10px 5px;}
	`]
})
export class AppComponent  {
	version:number = 0;
	
	constructor(){
		this.version = 2;
	}
}