import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VisitorComponent } from './visitor/visitor.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SignInComponent, SignUpComponent, VisitorComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {}
