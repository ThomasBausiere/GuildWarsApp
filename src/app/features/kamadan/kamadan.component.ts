import { Component } from '@angular/core';
import { TitlePageComponent } from '../../core/components/title-page/title-page.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { ProfilComponent } from '../../shared/components/profile/profile.component';
import { SearchResultComponent } from '../../shared/components/search-result/search-result.component';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { DetailSkillComponent } from '../../core/components/detail-skill/detail-skill.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: '.app-kamadan',
  standalone: true,
  imports: [
      CommonModule,
      SearchBarComponent,
      SearchResultComponent,
      ProfilComponent,
      MenuComponent,
      TitlePageComponent,
      DetailSkillComponent,
      RouterOutlet],
  templateUrl: './kamadan.component.html',
  styleUrls: ['./kamadan.component.css']
})
export class KamadanComponent {

}
