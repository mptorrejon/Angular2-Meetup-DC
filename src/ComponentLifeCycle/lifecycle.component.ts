import { 
	Component, 
	Output, 
	Input, 
	ViewChild,
	ContentChild,
	ElementRef, 
	EventEmitter,
	OnInit,
	OnDestroy,
	DoCheck,
	AfterViewChecked,
	AfterContentChecked
} from '@angular/core';
import { ChildComponent } from './childComponent/child.component';

@Component({
	selector: 'life-cycle'
	,directives: [ ChildComponent ]
	,template: `
		<label>Name: </label>{{name}}
		<button (click)="fullName()">Full Name</button>
		<child-component [objValues]="name" ></child-component>
	`
	,styles: [
		`
			label{color:green;}
			button{margin:10px 0px;}
		`
	]
})export class LifeCycleExamples implements OnInit, OnDestroy, DoCheck, AfterViewChecked, AfterContentChecked {
	@ViewChild(ChildComponent) viewchild: ChildComponent;
	@ContentChild(ChildComponent) contentChild: ChildComponent;

	hasChild = true;
	@Input() name;
	@Input() newName;
	@Output() changeName =  new EventEmitter<string>();
	logs:Array<string> = [];
	
	constructor(private eref:ElementRef){
		this.name = "Mauricio";
		console.log("Name has been set.");
		
		console.log(this.viewchild); //undefined because child has not been intialized YET!
	}
	//gets called on component initialization
	ngOnInit(){
		console.info("ngOnInit");
		console.log(this.viewchild);
	}
	
	//gets called to check changes in the component
	ngDoCheck(){
		console.info("ngDoCheck");
	}

	ngAfterContentInit(){
		console.info("After Content Init")
	}

	ngAfterContentChecked(){
		console.log("After Content Checked")
		
	}
	ngAfterViewInit(){
		console.info("ngAfterViewInit");
	}
	ngAfterViewChecked(){
		console.info("After View Checked");
		console.log(this.viewchild); //outputs child node
	}

	ngOnDestroy(){
		console.warn("Component destroyed :(");
	}
	//====//====HELPER FUNCTIONS====//====//====
	fullName(){
		this.name = "Mauricio Torrejon";
	}
}