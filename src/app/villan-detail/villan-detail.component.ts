import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Villan } from '../villans';
import { ActivatedRoute } from '@angular/router';
import { VillanService } from '../villan.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-villan-detail',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './villan-detail.component.html',
  styleUrl: './villan-detail.component.css'
})
export class VillanDetailComponent {
  @Input() villan?: Villan;
  constructor(private route: ActivatedRoute, private villanService: VillanService, private location: Location) { }

  ngOnInit(): void {
    this.getVillan();
  }

  getVillan(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.villanService.getVillan(id).subscribe(villan => this.villan = villan);
  }

  goBack(): void {
    this.location.back();
  }

}
