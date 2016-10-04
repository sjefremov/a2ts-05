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
var ingredients_service_1 = require('./ingredients.service');
var router_1 = require('@angular/router');
var IngredentsComponent = (function () {
    function IngredentsComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    IngredentsComponent.prototype.ngOnInit = function () { this.loadIngredients(); };
    IngredentsComponent.prototype.loadIngredients = function () {
        var _this = this;
        this.service.getAll().subscribe(function (results) { return _this.ingredients = results; }, function (error) { return _this.errorMsg = error; });
    };
    IngredentsComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (response) { return _this.router.navigate(['ingredients'], { replaceUrl: true }); });
    };
    IngredentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ingredients',
            templateUrl: 'ingredients.component.html'
        }), 
        __metadata('design:paramtypes', [ingredients_service_1.IngredientsService, router_1.Router])
    ], IngredentsComponent);
    return IngredentsComponent;
}());
exports.IngredentsComponent = IngredentsComponent;
//# sourceMappingURL=ingredients.component.js.map