import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.component.mobile.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover: string = ``;

  @Input()
  cardTitle: string = ``;

  @Input()
  Id: string = '0';

  constructor() {};

  ngOnInit(): void {};

}
