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
var ChildComponent = (function () {
    function ChildComponent() {
        this.oldVal = "";
        this.currVal = "";
    }
    ChildComponent.prototype.ngOnChanges = function (changes) {
        console.log("On Changes");
        this.currVal = changes.objValues.currentValue;
        this.oldVal = (typeof changes.objValues.previousValue == 'object') ? 'No Previous Value' : changes.objValues.previousValue;
    };
    ChildComponent.prototype.ngOnDestroy = function () {
        console.log("component being destroyed... :(");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChildComponent.prototype, "objValues", void 0);
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child-component',
            template: "\n\t\t<h2>Child Component</h2>\n\t\t<label>Old Value:</label> {{oldVal}} |\n\t\t<label>New Value:</label> {{currVal}}\n\t",
            styles: ["\n\t\tlabel{ color:red;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
