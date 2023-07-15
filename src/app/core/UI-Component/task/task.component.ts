import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
@Input() time!:string;
@Input() commitNumber!:string;
@Input() progressColor!:string;
@Input() progressNumber!:string;

  constructor() { }

  ngOnInit() {
  }

}
