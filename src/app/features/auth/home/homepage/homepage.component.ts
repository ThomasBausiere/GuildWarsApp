import { AfterViewInit, Component, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { SearchResultComponent } from '../../../../shared/components/search-result/search-result.component';
import { ProfilComponent } from '../../../../shared/components/profile/profile.component';
import { MenuComponent } from '../../../../shared/components/menu/menu.component';
import { TitlePageComponent } from '../../../../core/components/title-page/title-page.component';
import { DetailSkillComponent } from '../../../../core/components/detail-skill/detail-skill.component';
import { RouterOutlet } from '@angular/router';
import { GameToTComponent } from '../../../GameToT/game-to-t/game-to-t.component';
import { PersonnageComponent } from '../../../personnage/personnage/personnage.component';
import { RessourcesComponent } from '../../../ressources/ressources.component';
import { CompteComponent } from '../../../compte/compte/compte.component';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    SearchResultComponent,
    ProfilComponent,
    MenuComponent,
    TitlePageComponent,
    DetailSkillComponent,
    RouterOutlet
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {
  @ViewChild('menuList') menuList!: ElementRef;
  currentIndex: number = 0;
  confirmedIndex: number | null = null;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const listItems: HTMLElement[] = Array.from(this.menuList.nativeElement.querySelectorAll('li'));

    const updateClass = () => {
      listItems.forEach((item: HTMLElement, index: number) => {
        item.classList.remove('selected', 'nearly-selected', 'not-selected');

        if (index === this.confirmedIndex) {
          item.classList.add('selected');
        } else if (index === this.currentIndex) {
          item.classList.add('selected');
        } else if (
          index === (this.currentIndex - 1 + listItems.length) % listItems.length ||
          index === (this.currentIndex + 1) % listItems.length
        ) {
          item.classList.add('nearly-selected');
        } else {
          item.classList.add('not-selected');
        }
      });
    };

    updateClass();

    // Utilisation de Renderer2 pour écouter les événements de manière sécurisée
    this.renderer.listen('window', 'keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        this.currentIndex = (this.currentIndex - 1 + listItems.length) % listItems.length;
      } else if (e.key === 'ArrowDown') {
        this.currentIndex = (this.currentIndex + 1) % listItems.length;
      } else if (e.key === 'Enter') {
        this.confirmedIndex = this.currentIndex === this.confirmedIndex ? null : this.currentIndex;
      }
      updateClass();
    });

    this.renderer.listen('window', 'wheel', (e: WheelEvent) => {
      if (e.deltaY > 0) {
        this.currentIndex = (this.currentIndex + 1) % listItems.length;
      } else if (e.deltaY < 0) {
        this.currentIndex = (this.currentIndex - 1 + listItems.length) % listItems.length;
      }
      updateClass();
    });

    listItems.forEach((item: HTMLElement, index: number) => {
      this.renderer.listen(item, 'mouseover', () => {
        this.currentIndex = index;
        updateClass();
      });

      this.renderer.listen(item, 'click', (event: MouseEvent) => {
        event.preventDefault(); // Empêcher l'action par défaut du lien
        this.confirmedIndex = index;
        updateClass();
      });
    });
  }

  getSelectedComponent() {
    switch (this.confirmedIndex) {
      case 0:
        return GameToTComponent;
      case 1:
        return PersonnageComponent;
      case 2:
        return RessourcesComponent;
      case 3:
        return CompteComponent;
      case 4:
        return null; // Peut être utilisé pour une future fonctionnalité de déconnexion
      default:
        return null;
    }
  }
}
