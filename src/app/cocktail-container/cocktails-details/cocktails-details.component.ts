import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  public index: number;
  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
        this.index = params.index;
        this.cocktail = this.cocktailService.getCocktail(params.index);
      } else {
        this.index = 0;
        this.cocktail = this.cocktailService.getCocktail(0);
      }
    });
  }

  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }

  getUrl(): string[] {
    return ['/cocktails', this.index + '', 'edit'];
  }
}
