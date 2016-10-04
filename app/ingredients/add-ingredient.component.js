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
var AddIngredientComponent = (function () {
    function AddIngredientComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    AddIngredientComponent.prototype.ngOnInit = function () { };
    AddIngredientComponent.prototype.save = function () {
        var _this = this;
        this.service.save({ 'name': this.name, 'recipeId': this.recipeId }).subscribe(function (result) { return _this.router.navigate(['ingredients'], { replaceUrl: true }); });
    };
    AddIngredientComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-ingredient',
            templateUrl: 'add-ingredient.component.html'
        }), 
        __metadata('design:paramtypes', [ingredients_service_1.IngredientsService, router_1.Router])
    ], AddIngredientComponent);
    return AddIngredientComponent;
}());
exports.AddIngredientComponent = AddIngredientComponent;
//# sourceMappingURL=add-ingredient.component.js.map