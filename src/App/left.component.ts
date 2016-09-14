import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'left-component',
  template: `<h3 class="text">{{whichCmp}} Component</h3>`,
  styles:[`
  	h3{ display:inline-block; background: yellow;}
  	.text{ color:red; }
  `]

})
export class LeftComponent {
	@Input() which;
	@Output() whichCmp = "Default";

	ngOnInit(){
		this.whichCmp = this.which;
	}
	
}