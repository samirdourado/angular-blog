import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component.mobile.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photCover: string = ``;

  @Input()
  cardTitle: string = ``;

  @Input()
  cardDescription: string = ``;

  constructor() {};

  ngOnInit(): void {};

}
