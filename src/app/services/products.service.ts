import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  url = 'https://dummyjson.com/products';
  products: any;

  async getAllProducts(): Promise<Products[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }


}
