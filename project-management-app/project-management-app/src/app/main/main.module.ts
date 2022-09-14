import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { CardComponent } from './card/card.component';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [
    MainWrapperComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    DialogModule,
  ]
})
export class MainModule { }
