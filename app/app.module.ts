import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { RecipesComponent, RecipesService, RecipeViewComponent, AddRecipeComponent }  from './recipes/index';


import { routing, appRoutingProviders } from './app.routings';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    RecipesComponent,
    RecipeViewComponent,
    AddRecipeComponent
  ],
  bootstrap: [ AppComponent ],
  providers : [ appRoutingProviders, RecipesService]
})
export class AppModule { }