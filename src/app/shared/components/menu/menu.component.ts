import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl:'./menu.component.html',
  styleUrl:'./menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router){}
    goToLoginPage (){
      this.router.navigate(['/login'])
    }
}
