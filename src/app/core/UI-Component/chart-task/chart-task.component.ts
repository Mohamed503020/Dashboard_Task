import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-task',
  templateUrl: './chart-task.component.html',
  styleUrls: ['./chart-task.component.css']
})
export class ChartTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() chartOptions:any;

}
