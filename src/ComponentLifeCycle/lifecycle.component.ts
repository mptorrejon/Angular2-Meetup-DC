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
	selector: 'life-cycle',
	directives: [ ChildComponent ],
	template: `
		<div>
			<label>Name: </label>{{name}}
		</div>
		<button  (click)="fullName()">Full Name</button>
		<child-component [objValues]="name" ></child-component>
	`
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
		// this.changeName.subscribe((newName)=>{
		// 	this.name = newName;
		// })
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