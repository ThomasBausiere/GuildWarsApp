import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../../core/services/skill.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../core/models/skill';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  providers: [SkillService]
})
export class SearchResultComponent implements OnInit {
  searchTerms = new Subject<string>();
  skills$: Observable<Skill[]> | undefined;
  selectedSkill: Skill | undefined;
  isModalOpen = false;

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skills$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.skillService.searchSkillList(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  openModal(skill: Skill): void {
    this.selectedSkill = skill;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedSkill = undefined;
  }
}
