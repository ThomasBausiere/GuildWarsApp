import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    HomepageComponent,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
