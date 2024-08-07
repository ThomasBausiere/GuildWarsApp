import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skillsUrl = 'assets/skills.json';  // URL du fichier JSON

  constructor(private http: HttpClient) {}

  getSkillList(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillsUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getSkillById(skillId: string): Observable<Skill | undefined> {
    return this.getSkillList().pipe(
      map((skills) => skills.find(skill => skill.id === skillId)),
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getSkillByName(skillName: string): Observable<Skill[]> {
    return this.getSkillList().pipe(
      map((skills) => skills.filter(skill => skill.name.toLowerCase().includes(skillName.toLowerCase()))),
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getSkillByClass(skillClass: string): Observable<Skill[]> {
    return this.getSkillList().pipe(
      map((skills) => skills.filter(skill => skill.profession.toLowerCase().includes(skillClass.toLowerCase()))),
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getSkillByCampaign(skillCampaign: string): Observable<Skill[]> {
    return this.getSkillList().pipe(
      map((skills) => skills.filter(skill => skill.campaign.toLowerCase().includes(skillCampaign.toLowerCase()))),
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getSkillByAttribute(skillAttribute: string): Observable<Skill[]> {
    return this.getSkillList().pipe(
      map((skills) => skills.filter(skill => skill.statistic.toLowerCase().includes(skillAttribute.toLowerCase()))),
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  searchSkillList(term: string): Observable<Skill[]> {
    if (!term.trim()) {
      // si le terme de recherche est vide, retourner un tableau vide.
      return of([]);
    }
    const lowerTerm = term.toLowerCase();
    return this.getSkillList().pipe(
      map((skills) => skills.filter(skill =>
        skill.name.toLowerCase().includes(lowerTerm) ||
        skill.profession.toLowerCase().includes(lowerTerm) ||
        skill.statistic.toLowerCase().includes(lowerTerm) ||
        skill.campaign.toLowerCase().includes(lowerTerm)
      ))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: HttpErrorResponse, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
