import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { VisitorComponent } from './login/visitor/visitor.component';

@NgModule({

  imports: [
    CommonModule,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    VisitorComponent
  ]
})
export class AuthModule { }
