import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Cocktail } from 'src/app/shared/models/cocktail.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css'],
})
export class CocktailEditComponent implements OnInit {
  public cocktailForm: FormGroup;
  public cocktail: Cocktail;

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
        this.cocktail = this.cocktailService.getCocktail(params.index);
        this.initForm(this.cocktail);
      } else {
        this.initForm();
      }
    });
  }

  initForm(cocktail = { name: '', img: '', desc: '', ingredients: [] }) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      desc: cocktail.desc,
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) =>
          this.fb.group({
            name: ingredient.name,
            quantity: ingredient.quantity,
          })
        )
      ),
    });
  }

  addIngredient() {
    (this.cocktailForm.get('ingredients') as FormArray).push(
      this.fb.group({
        name: '',
        quantity: '',
      })
    );
  }

  createCocktail() {
    this.cocktailService.addCocktail(this.cocktailForm.value);
  }
}
