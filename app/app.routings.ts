import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent, RecipeViewComponent, AddRecipeComponent } from './recipes/index';
import { IngredentsComponent, AddIngredientComponent } from './ingredients/index';
import { LoginComponent } from './login/index';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'recipes',
    children : [
        {
          path: '',
          component : RecipesComponent
        },
        {
            path : 'add',
            component : AddRecipeComponent
        },
        {
          path: ':id',
          component : RecipeViewComponent
        }
    ]
  },
  { 
    path : 'ingredients',
    children : [
      {
        path : '',
        component : IngredentsComponent
      },
      {
        path : 'add',
        component : AddIngredientComponent
      }
    ]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash : true});