import { Component, inject, signal } from '@angular/core';
import { BoutonsComponent } from '../../../shared/components/boutons/boutons.component'; 
import { ProphecieComponent } from "./prophecie/prophecie.component";
import { NgComponentOutlet, NgIf } from '@angular/common';
import { FactionComponent } from './faction/faction.component';
import { NightfallComponent } from './nightfall/nightfall.component';
import { EotnComponent } from './eotn/eotn.component';
import { ViewService } from '../../../core/services/view.service';

@Component({
  selector: 'app-coop',
  standalone: true,
  imports: [BoutonsComponent, NgIf, NgComponentOutlet, ProphecieComponent, FactionComponent, NightfallComponent, EotnComponent],
  templateUrl: './coop.component.html',
  styleUrl: './coop.component.css'
})
export class CoopComponent {
  private viewService = inject(ViewService);

  openVue(vue: keyof ViewService['vues']) {
    this.viewService.setView(vue);
  }
}
