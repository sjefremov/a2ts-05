import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent, RecipeViewComponent, AddRecipeComponent } from './recipes/index';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
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
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);