import { Component } from '@angular/core';
import { BoutonsComponent } from '../../shared/components/boutons/boutons.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [BoutonsComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
}


