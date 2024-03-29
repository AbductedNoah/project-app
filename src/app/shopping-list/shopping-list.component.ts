import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subs: Subscription

  constructor(private sLService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.sLService.getIngredients();
    this.subs = this.sLService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients
        });
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe()
  }
}
