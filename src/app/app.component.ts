import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { VillansComponent } from './villans/villans.component';

import { NgIf } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, // Import RouterModule
    HeroesComponent, VillansComponent, HeroDetailComponent, NgIf, MessagesComponent,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
  yapSesh = 'So class today we are talking about rizz'
  selectedOption: string = '';

  onSelectionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
  }
}
