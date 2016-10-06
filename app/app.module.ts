import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { RecipesComponent, RecipesService, RecipeViewComponent, AddRecipeComponent }  from './recipes/index';
import { IngredentsComponent, IngredientsService, AddIngredientComponent } from './ingredients/index';
import { LoginComponent, LoginService, AuthService } from './login/index';

import { routing, appRoutingProviders } from './app.routings';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    RecipesComponent,
    RecipeViewComponent,
    AddRecipeComponent,
    IngredentsComponent,
    AddIngredientComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ],
  providers : [ appRoutingProviders, RecipesService, IngredientsService, LoginService, AuthService]
})
export class AppModule { }
