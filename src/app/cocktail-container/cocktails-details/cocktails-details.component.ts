import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css'],
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.cocktailService.cocktail.subscribe((cocktail: Cocktail) => {
      this.cocktail = cocktail;
    });
  }

  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }
}
