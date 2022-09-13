import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    MainWrapperComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
