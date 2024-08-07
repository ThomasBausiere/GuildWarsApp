import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { CreateCharacterComponent } from './features/auth/character/create-character/create-character.component';
import { HomepageComponent } from './features/auth/home/homepage/homepage.component';
import { OverviewComponent } from './features/auth/overview/overview.component';
import { SettingsComponent } from './features/auth/settings/settings.component';
import { ListSkillComponent } from './core/components/list-skills/list-skills.component';
import { DetailSkillComponent } from './core/components/detail-skill/detail-skill.component';
import { SearchResultComponent } from './shared/components/search-result/search-result.component';
import { MainComponent } from './core/components/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'create-character', component: CreateCharacterComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'skills', component: ListSkillComponent },
  { 
    path: '', 
    component: MainComponent,
    children: [
      { path: 'skill/:id', component: SearchResultComponent, children: [
        { path: '', component: DetailSkillComponent, outlet: 'modal' }
      ]}
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
