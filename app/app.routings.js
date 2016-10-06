"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var index_1 = require('./recipes/index');
var index_2 = require('./ingredients/index');
var index_3 = require('./login/index');
var appRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: index_3.LoginComponent },
    {
        path: 'recipes',
        children: [
            {
                path: '',
                component: index_1.RecipesComponent
            },
            {
                path: 'add',
                component: index_1.AddRecipeComponent
            },
            {
                path: ':id',
                component: index_1.RecipeViewComponent
            }
        ]
    },
    {
        path: 'ingredients',
        children: [
            {
                path: '',
                component: index_2.IngredentsComponent
            },
            {
                path: 'add',
                component: index_2.AddIngredientComponent
            }
        ]
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routings.js.map