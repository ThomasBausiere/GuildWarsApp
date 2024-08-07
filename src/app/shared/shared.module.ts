import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ProfilComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SearchBarComponent,
    SearchResultComponent,
    ProfilComponent,
    MenuComponent
  ],
  exports: [
    SearchBarComponent,
    SearchResultComponent,
    ProfilComponent,
    MenuComponent
  ]
})
export class SharedModule { }
