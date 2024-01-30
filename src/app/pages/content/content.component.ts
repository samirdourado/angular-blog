import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataMock } from '../../data/dataMock';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.component.mobile.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = ``;
  contentTitle: string = ``;
  contentDescription: string = ``
  private id: string | null = "0";

  constructor(
    private route:ActivatedRoute

  ) { };

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    )

    this.setValuestoComponent(this.id)
  };

  setValuestoComponent(id: string | null) {
    const result = dataMock.filter(article => article.id === id)[0]

    this.id = result.id
    this.photoCover = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description
  };

}
