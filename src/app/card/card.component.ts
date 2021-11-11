import { Component, Input, OnInit } from '@angular/core';

import { MainService } from '../main/main.service';
import { Card } from '../interface/cardInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() url: string = "";
  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() categories: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
