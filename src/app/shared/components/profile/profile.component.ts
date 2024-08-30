import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfilComponent implements AfterViewInit {
  @ViewChild('menuList') menuList!: ElementRef;
  currentIndex: number = 0;
  confirmedIndex: number | null = null;

  ngAfterViewInit(): void {
    const listItems = this.menuList.nativeElement.querySelectorAll('li');

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

    // Écouter les événements de clavier pour naviguer dans le menu
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        this.currentIndex = (this.currentIndex - 1 + listItems.length) % listItems.length;
      } else if (e.key === 'ArrowDown') {
        this.currentIndex = (this.currentIndex + 1) % listItems.length;
      } else if (e.key === 'Enter') {
        this.confirmedIndex = this.currentIndex === this.confirmedIndex ? null : this.currentIndex;
      }
      updateClass();
    });

    // Écouter la molette de la souris pour naviguer dans le menu
    window.addEventListener('wheel', (e: WheelEvent) => {
      if (e.deltaY > 0) {
        this.currentIndex = (this.currentIndex + 1) % listItems.length;
      } else if (e.deltaY < 0) {
        this.currentIndex = (this.currentIndex - 1 + listItems.length) % listItems.length;
      }
      updateClass();
    });

    // Ajouter les écouteurs pour chaque item de la liste
    listItems.forEach((item: HTMLElement, index: number) => {
      item.addEventListener('mouseover', () => {
        this.currentIndex = index;
        updateClass();
      });

      item.addEventListener('click', () => {
        this.confirmedIndex = index;
        updateClass();
      });
    });
  }
}
