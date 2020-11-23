import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
  providers: [FilterPipe],
})
export class CocktailsListComponent implements OnInit {
  search: string = '';
  cocktails: Cocktail[];
  public activeCocktail: number = 0;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });
  }
}
