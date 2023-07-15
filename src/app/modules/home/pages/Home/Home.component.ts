import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
cardlist:any;
chartOptions = {
  animationEnabled: true,
  exportEnabled: true,
  axisY: {

  },
  toolTip: {
  shared: true,
  content: "{name}"
  },
  legend: {
  fontSize: 5
  },
  data: [
  {
    type: "splineArea",
    name: "max value",
    markerSize: 7,
    color: "rgb(80,81,249)",
    dataPoints: [
    {x: new Date(2023, 0), y: 20},
    {x: new Date(2023, 1), y: 100},
    {x: new Date(2023, 2), y: 200},
    {x: new Date(2023, 3), y: 300},
    {x: new Date(2023, 4), y: 400},
    {x: new Date(2023, 5), y: 20},
    {x: new Date(2023, 6), y: 100},
    {x: new Date(2023, 7), y: 200},
    {x: new Date(2023, 8), y: 300},
    {x: new Date(2023, 9), y: 400},
    {x: new Date(2023, 10), y: 20},
    {x: new Date(2023, 11),  y: 100}
    ]
  },
  {
    type: "splineArea",
    name: "minumam Value",
    markerSize: 7,
    color: "rgb(55,176,255)",
    dataPoints: [
    {x: new Date(2023, 0), y: 0},
    {x: new Date(2023, 1), y: 20},
    {x: new Date(2023, 2), y: 100},
    {x: new Date(2023, 3), y: 400},
    {x: new Date(2023, 4), y: 300},
    {x: new Date(2023, 5), y: 100},
    {x: new Date(2023, 6), y: 200},
    {x: new Date(2023, 7), y: 100},
    {x: new Date(2023, 8), y: 200},
    {x: new Date(2023, 9), y: 20},
    {x: new Date(2023, 10), y: 100},
    {x: new Date(2023, 11), y: 200}
    ]
  },
  ]
}
taskList=[
  {
 time:"9",
commitNumber:"8",
 progressColor:"fill:#23B2FF;width:51",
 progressNumber:"24",

  },
  {
    time:"3",
   commitNumber:"5",
    progressColor:"fill:#5051F9;width:102",
    progressNumber:"60"
     }
]
  constructor() { }

  ngOnInit() {
    this.cardlist=[
      {
        name:"New Task",
        numberCard:'08',
        icon:"fa-sharp fa-regular fa-star",
        Chartcolor:"stroke:#5051F9"
      },
      {
        name:"Task Complated",
        numberCard:'10',
        icon:"fa-regular fa-file",
        Chartcolor:"stroke:#1EA7FF"
      },
      {
        name:"Project Done",
        numberCard:'10',
        icon:"fa-regular fa-circle-check",
        Chartcolor:" stroke:#FF614C"
      }
    ]
  }

}
