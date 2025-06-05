import { Injectable, signal } from '@angular/core';
import { GameToTComponent } from '../../features/Game/game.component';
import { ProphecieComponent } from '../../features/Game/coop/prophecie/prophecie.component';
import { FactionComponent } from '../../features/Game/coop/faction/faction.component';
import { NightfallComponent } from '../../features/Game/coop/nightfall/nightfall.component';
import { EotnComponent } from '../../features/Game/coop/eotn/eotn.component';
import { WelcomeComponent } from '../../features/welcome/welcome.component';
import { KamadanComponent } from '../../features/kamadan/kamadan.component';
import { ListSkillComponent } from '../components/list-skills/list-skills.component';

@Injectable({ providedIn: 'root' })
export class ViewService {
  vues = {
    welcome: WelcomeComponent,
    game: GameToTComponent,
    kamadan: KamadanComponent,
    prophecie: ProphecieComponent,
    faction: FactionComponent,
    nightfall: NightfallComponent,
    eotn: EotnComponent,
    skillhunter:ListSkillComponent
  };

  private selected = signal<keyof typeof this.vues>('welcome');

  get currentView() {
    return this.vues[this.selected()];
  }

  setView(view: keyof typeof this.vues) {
    this.selected.set(view);
  }
}