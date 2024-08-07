import { Component, inject, OnInit } from '@angular/core';
import { SKILLS } from '../../data/mock-skill-list';
import { Skill } from '../../models/skill';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SearchResultComponent } from '../../../shared/components/search-result/search-result.component';
import { ClassColorPipe } from '../../../shared/pipes/class-color.pipe';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-list-skill',
  standalone: true,
  templateUrl: './list-skills.component.html',
  providers: [SkillService, HttpClient],
  imports: [CommonModule, ClassColorPipe, FormsModule, RouterModule, SearchResultComponent]
})
export class ListSkillComponent implements OnInit {
  skillList: Skill[] = [];

  constructor(private router: Router, private skillService: SkillService) {}

  ngOnInit() {
    this.skillService.getSkillList().subscribe(
      skills => this.skillList = skills,
      error => console.error('There was an error fetching the skill list:', error)
    );
  }

  goToSkill(skill: Skill) {
    this.router.navigate(['/skill', skill.id]);
  }
}
