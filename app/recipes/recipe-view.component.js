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
var recipes_service_1 = require('./recipes.service');
var router_1 = require('@angular/router');
var RecipeViewComponent = (function () {
    function RecipeViewComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    RecipeViewComponent.prototype.ngOnInit = function () {
        this.loadRecipe();
    };
    RecipeViewComponent.prototype.loadRecipe = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            console.log(params);
            _this.service.get(+params['id']).subscribe(function (results) { _this.recipe = results; console.log(results); }, function (error) { return _this.errorMsg = error; });
        });
    };
    RecipeViewComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.recipe.id).subscribe(function (response) { return _this.router.navigate(['recipes']); });
    };
    RecipeViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe-view',
            templateUrl: 'recipe-view.component.html'
        }), 
        __metadata('design:paramtypes', [recipes_service_1.RecipesService, router_1.ActivatedRoute, router_1.Router])
    ], RecipeViewComponent);
    return RecipeViewComponent;
}());
exports.RecipeViewComponent = RecipeViewComponent;
//# sourceMappingURL=recipe-view.component.js.map