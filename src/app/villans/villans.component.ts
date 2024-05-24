import { Component } from '@angular/core';
import { VILLANS } from '../mock-villans';
import { VillanService } from '../villan.service';
import { CommonModule, NgFor, UpperCasePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Villan } from '../villans';
import { VillanDetailComponent } from '../villan-detail/villan-detail.component';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-villans',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    NgFor,
    UpperCasePipe,
    NgIf,
    VillanDetailComponent,
    RouterModule,
],
  templateUrl: './villans.component.html',
  styleUrl: './villans.component.css'
})
export class VillansComponent {
  villans: Villan[] = [];
  selectedVillan?: Villan;
  constructor(private villanService: VillanService, private messageService: MessageService) { }

  getVillans(): void {
    this.villanService.getVillans().subscribe(villans => this.villans = villans);
  }
 

  ngOnInit(): void {
    this.getVillans();
  }
}
