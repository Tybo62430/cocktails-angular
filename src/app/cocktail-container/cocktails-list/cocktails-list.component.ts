import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss'],
})
export class CocktailsListComponent implements OnInit {
  @Input() cocktails: Cocktail[];
  @Output() public pick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  pickCocktail(index: number): void {
    this.pick.emit(index);
  }
}
