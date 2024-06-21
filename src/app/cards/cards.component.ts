import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../models/products';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input()
  products!: Products;
}
