import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name!: string;
  @Input() numberCard!: string;
  @Input() Chartcolor!: string;
  @Input() icon!: string;

  constructor() { }

  ngOnInit() {
  }

}
