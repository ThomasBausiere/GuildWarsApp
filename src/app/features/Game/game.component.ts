import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { BoutonsComponent } from '../../shared/components/boutons/boutons.component'; 
import { HomepageComponent } from '../../layout/homepage.component';
import { ProphecieComponent } from './coop/prophecie/prophecie.component';
import { NgComponentOutlet, NgIf } from '@angular/common';
import { CoopComponent } from "./coop/coop.component";

@Component({
  selector: '.app-game-to-t',
  standalone: true,
  imports: [BoutonsComponent, CoopComponent, NgIf, NgComponentOutlet, CoopComponent],
  templateUrl:'./game.component.html',
  styleUrl:'./game.component.css'
})
export class GameToTComponent{
  selectedVue = signal<any>(null);

   ProphecieComponent = ProphecieComponent;
   
  setVue(vue: any) {
    this.selectedVue.set(vue);
  }


}
