import { RightAsideComponent } from './components/rightAside/rightAside.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    HeaderComponent,
    LeftAsideComponent,
    RightAsideComponent,
    NotFoundComponent
  ],
  exports:[
    HeaderComponent,
    LeftAsideComponent,
    RightAsideComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
