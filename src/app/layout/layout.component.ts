import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent,CommonModule,CardsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  products: Products[] = [];

  productsService = inject(ProductsService);

  constructor() {
    this.productsService.getAllProducts().then((data: Products[]) => {
      this.products = data;
    });
  }
}
