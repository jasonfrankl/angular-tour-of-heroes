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

  getVillans(): Observable<Villan[]> {
    const villans = of(VILLANS);
    this.messageService.add('VillanService: fetched villans')
    return villans;
  }
}
