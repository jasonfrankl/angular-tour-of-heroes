import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule], // Import RouterModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // defines a heroes array property

  constructor(private heroService: HeroService) { } //expects Angular to inject the HeroService into a private heroService property

  /**
   * Lifecycle hook class getHeroes()
   */
  ngOnInit(): void {
    this.getHeroes();
  }
  /**
   * This slice only returns the sliced heroes from 2-5 so heroes 2,3,4,5
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
