import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://www.maxpixel.net/static/photo/2x/Borsch-A-Simple-Recipe-Cook-At-Home-Food-4260907.jpg' )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
