import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../../../features/auth/home/homepage/homepage.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    imports: [CommonModule, HomepageComponent, RouterOutlet, RouterModule],
    
})
export class MainComponent {}
