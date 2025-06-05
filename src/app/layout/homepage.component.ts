import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import { SearchBarComponent } from './../shared/components/search-bar/search-bar.component';
import { SearchResultComponent } from './../shared/components/search-result/search-result.component';
import { ProfilComponent } from './../shared/components/profile/profile.component';
import { MenuComponent } from './../shared/components/menu/menu.component';
import { TitlePageComponent } from './../core/components/title-page/title-page.component';
import { DetailSkillComponent } from './../core/components/detail-skill/detail-skill.component';
import { RouterOutlet } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { ViewService } from './../core/services/view.service';

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
  currentIndex = 0;
  confirmedIndex: number | null = null;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    public viewService: ViewService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.viewService.setView('welcome'); // Affichage par défaut
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const listItems: HTMLElement[] = Array.from(
      this.menuList.nativeElement.querySelectorAll('li')
    );

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

    this.renderer.listen('window', 'keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        this.currentIndex = (this.currentIndex - 1 + listItems.length) % listItems.length;
      } else if (e.key === 'ArrowDown') {
        this.currentIndex = (this.currentIndex + 1) % listItems.length;
      } else if (e.key === 'Enter') {
        this.confirmedIndex = this.currentIndex === this.confirmedIndex ? null : this.currentIndex;
        this.updateViewFromIndex();
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
        event.preventDefault();
        this.confirmedIndex = index;
        this.updateViewFromIndex();
        updateClass();
      });
    });
  }

  updateViewFromIndex() {
    switch (this.confirmedIndex) {
      case 0:
        this.viewService.setView('welcome');
        break;
      case 1:
        this.viewService.setView('game');
        break;
      case 2:
        this.viewService.setView('kamadan');
        break;
      case 3:
        this.viewService.setView('skillhunter');
        break;
      default:
        this.viewService.setView('welcome');
        break;
    }
  }
}

