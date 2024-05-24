import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';
import { VillanService } from '../villan.service';
import { Villan } from '../villans';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule], // Import RouterModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // defines a heroes array property
  villans: Villan[] = [];
  constructor(private heroService: HeroService, private villanService: VillanService) { } //expects Angular to inject the HeroService into a private heroService property

  /**
   * Lifecycle hook class getHeroes()
   */
  ngOnInit(): void {
    this.getHeroes();
    this.getVillians();
  }
  /**
   * This slice only returns the sliced heroes from 2-5 so heroes 2,3,4,5
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  /**
   * This slice only returns the sliced villians from 2-5 so heroes 2,3
   */
  getVillians(): void {
    this.villanService.getVillans().subscribe(villans => this.villans = villans.slice(1, 3));
  }
}
