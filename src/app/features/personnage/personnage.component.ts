import { Component } from '@angular/core';
import { BoutonsComponent } from '../../shared/components/boutons/boutons.component';

@Component({
  selector: 'app-personnage',
  standalone: true,
  imports: [BoutonsComponent],
  templateUrl:'./personnage.component.html',
  styleUrl: `./personnage.component.css`
})
export class PersonnageComponent {

}
