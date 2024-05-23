import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Villan } from '../villans';
@Component({
  selector: 'app-villan-detail',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './villan-detail.component.html',
  styleUrl: './villan-detail.component.css'
})
export class VillanDetailComponent {
  @Input() villan?: Villan;
}
