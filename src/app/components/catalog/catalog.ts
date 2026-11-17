import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-catalog',
  imports: [Card],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
   productService = inject(ProductService);
}
