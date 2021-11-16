import { Component, OnInit } from '@angular/core';

import { MainService } from './main.service';
import { Card } from '../interface/cardInterface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cards: Card[] = [];
  constructor(private mainService: MainService) {

  }

  ngOnInit(): void {
    this.cards = [...this.mainService.getProducts];
    console.log(this.cards);
  }
  showProducts() {
    this.cards = [...this.mainService.getProducts];
    console.log(this.cards);
  }

}
