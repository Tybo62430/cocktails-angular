import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
})
export class CocktailsListComponent implements OnInit {
  cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) {}
  public activeCocktail: number = 0;

  ngOnInit(): void {
    this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });
  }
}
