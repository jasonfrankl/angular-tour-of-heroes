import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { VillansComponent } from './villans/villans.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { VillanDetailComponent } from './villan-detail/villan-detail.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'herodetail/:id', component: HeroDetailComponent },

  { path: 'villans', component: VillansComponent },
  { path: 'villandetail/:id', component: VillanDetailComponent },

];
