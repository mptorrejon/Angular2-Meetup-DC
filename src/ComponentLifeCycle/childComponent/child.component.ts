import {Component, Input} from '@angular/core';

@Component({
	selector: 'child-component'
	,template: 	`
		<h2>Child Component</h2>
		<label>Old Value:</label> {{oldVal}} |
		<label>New Value:</label> {{currVal}}
	`
	,styles: [`
		label{ color:red;}
	`]
})export class ChildComponent{
	@Input() objValues;
	oldVal:string ="";
	currVal:string ="";

	ngOnChanges(changes){
		console.log("On Changes");
		this.currVal = changes.objValues.currentValue;
		this.oldVal = (typeof changes.objValues.previousValue == 'object')?'No Previous Value':changes.objValues.previousValue;
	}
	ngOnDestroy(){
		console.log("component being destroyed... :(");
	}
}