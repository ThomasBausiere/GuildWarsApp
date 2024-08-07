import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CreateCharacterComponent,
    CommonModule,
    SharedModule
  ]
})
export class CharacterModule { }
