import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [SliderModule, FormsModule, CommonModule, ButtonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<number[]>();

  priceRange: number[] = [0, 300]; // Default range
  minPrice = 0;
  maxPrice = 300;

  showFilter: boolean = false; // Kezdetben a szűrő rejtve van

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  applyFilter() {
    this.filterChange.emit(this.priceRange);
  }
}
