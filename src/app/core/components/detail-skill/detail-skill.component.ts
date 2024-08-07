import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-detail-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-skill.component.html',
  styleUrls: ['./detail-skill.component.css'],
  providers: [SkillService]
})
export class DetailSkillComponent implements OnInit {
  skill: Skill | undefined;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private skillService = inject(SkillService);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.skillService.getSkillById(id) : of(undefined);
      })
    ).subscribe(skill => this.skill = skill);
  }

  closeModal(): void {
    this.router.navigate([{ outlets: { modal: null } }]);
  }
}
