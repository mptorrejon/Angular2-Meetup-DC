"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('../App/app.component');
exports.routes = [
    {
        path: '',
        component: app_component_1.AppComponent1
    }
];
exports.ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
