import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktail-container/cocktails-details/cocktails-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './cocktail-container/panier/panier.component';
import { IngredientsListComponent } from './cocktail-container/panier/ingredients-list/ingredients-list.component';
import { AppRounting } from './app-routing'; 
import { PanierService } from "./shared/services/panier.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent,
    CocktailContainerComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent,
  ],
  imports: [BrowserModule, AppRounting],
  providers: [PanierService],
  bootstrap: [AppComponent],
})
export class AppModule {}
