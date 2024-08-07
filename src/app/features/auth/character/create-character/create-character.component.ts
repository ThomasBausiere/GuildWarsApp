import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { SearchResultComponent } from '../../../../shared/components/search-result/search-result.component';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, SearchResultComponent],
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {}
