import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './UI-Component/card/card.component';
import { ChartTaskComponent } from './UI-Component/chart-task/chart-task.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { TaskComponent } from './UI-Component/task/task.component';
import { MessageComponent } from './UI-Component/message/message.component';

@NgModule({
  imports: [
    CommonModule,
    CanvasJSAngularChartsModule
  ],
  declarations: [
    CardComponent,
    ChartTaskComponent,
    TaskComponent,
    MessageComponent
  ],
  exports:[
    CardComponent,
    ChartTaskComponent,
    TaskComponent,
    MessageComponent

  ]
})
export class CoreModule { }
