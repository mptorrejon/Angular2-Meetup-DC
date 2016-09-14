"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var child_component_1 = require('./childComponent/child.component');
var LifeCycleExamples = (function () {
    function LifeCycleExamples(eref) {
        this.eref = eref;
        this.hasChild = true;
        this.changeName = new core_1.EventEmitter();
        this.logs = [];
        this.name = "Mauricio";
        console.log("Name has been set.");
        console.log(this.viewchild); //undefined because child has not been intialized YET!
    }
    //gets called on component initialization
    LifeCycleExamples.prototype.ngOnInit = function () {
        console.info("ngOnInit");
        console.log(this.viewchild);
    };
    //gets called to check changes in the component
    LifeCycleExamples.prototype.ngDoCheck = function () {
        console.info("ngDoCheck");
    };
    LifeCycleExamples.prototype.ngAfterContentInit = function () {
        console.info("After Content Init");
    };
    LifeCycleExamples.prototype.ngAfterContentChecked = function () {
        console.log("After Content Checked");
    };
    LifeCycleExamples.prototype.ngAfterViewInit = function () {
        console.info("ngAfterViewInit");
    };
    LifeCycleExamples.prototype.ngAfterViewChecked = function () {
        console.info("After View Checked");
        console.log(this.viewchild); //outputs child node
    };
    LifeCycleExamples.prototype.ngOnDestroy = function () {
        console.warn("Component destroyed :(");
    };
    //====//====HELPER FUNCTIONS====//====//====
    LifeCycleExamples.prototype.fullName = function () {
        this.name = "Mauricio Torrejon";
    };
    __decorate([
        core_1.ViewChild(child_component_1.ChildComponent), 
        __metadata('design:type', child_component_1.ChildComponent)
    ], LifeCycleExamples.prototype, "viewchild", void 0);
    __decorate([
        core_1.ContentChild(child_component_1.ChildComponent), 
        __metadata('design:type', child_component_1.ChildComponent)
    ], LifeCycleExamples.prototype, "contentChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LifeCycleExamples.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LifeCycleExamples.prototype, "newName", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LifeCycleExamples.prototype, "changeName", void 0);
    LifeCycleExamples = __decorate([
        core_1.Component({
            selector: 'life-cycle',
            directives: [child_component_1.ChildComponent],
            template: "\n\t\t<label>Name: </label>{{name}}\n\t\t<button (click)=\"fullName()\">Full Name</button>\n\t\t<child-component [objValues]=\"name\" ></child-component>\n\t",
            styles: [
                "\n\t\t\tlabel{color:green;}\n\t\t\tbutton{margin:10px 0px;}\n\t\t"
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LifeCycleExamples);
    return LifeCycleExamples;
}());
exports.LifeCycleExamples = LifeCycleExamples;
