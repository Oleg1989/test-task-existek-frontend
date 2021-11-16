import { Component, Input, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { MainService } from '../main/main.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  selectCategory: string[] = [];

  typesOfCategories: string[] = ['Shop by Brand', 'Home', 'Electronics', 'Health', 'Sports & Outdoors'];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {

  }
  onNgModelChange() {
    console.log(this.selectCategory);
    this.mainService.filterGards(this.selectCategory);
  }

}
