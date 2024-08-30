import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule],
  templateUrl:'./sign-up.component.html',
  styleUrl:'./sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router){}
    goToLoginPage (){
      this.router.navigate(['/login'])
    }
}
