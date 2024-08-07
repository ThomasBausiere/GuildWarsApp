import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { SearchResultComponent } from '../../../../shared/components/search-result/search-result.component';
import { ProfilComponent } from "../../../../shared/components/profile/profile.component";
import { MenuComponent } from '../../../../shared/components/menu/menu.component';
import { TitlePageComponent } from "../../../../core/components/title-page/title-page.component";
import { DetailSkillComponent } from '../../../../core/components/detail-skill/detail-skill.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, SearchResultComponent, ProfilComponent, MenuComponent, TitlePageComponent, DetailSkillComponent, RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {}


