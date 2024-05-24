import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VILLANS } from './mock-villans';
import { Villan } from './villans';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class VillanService {

  constructor(private messageService: MessageService) { }

 

  getVillan(id: number): Observable<Villan> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const villian = VILLANS.find(h => h.id === id)!;
    this.messageService.add(`VillanService: fetched villian id=${id}`);
    return of(villian);
  }
  getVillans(): Observable<Villan[]> {
    const villans = of(VILLANS);
    this.messageService.add('VillanService: fetched villans')
    return villans;
  }
}
