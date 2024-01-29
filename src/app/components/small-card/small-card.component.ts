import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.component.mobile.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover: string = ``;

  @Input()
  cardTitle: string = ``;

  constructor() {};

  ngOnInit(): void {};

}
