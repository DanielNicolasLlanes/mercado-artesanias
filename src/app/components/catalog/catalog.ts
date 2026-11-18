import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Card } from '../card/card';
import { CategoryFilter } from '../category-filter/category-filter';

@Component({
  selector: 'app-catalog',
  imports: [Card, CategoryFilter],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  productService = inject(ProductService);
  selectedCategory = 'all';

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'all') {
      return this.productService.products;
    }

    return this.productService.products.filter(
      (product) => product.category === this.selectedCategory,
    );
  }
}
