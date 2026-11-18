import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


    public categories: Category[] = [
      { id: "all", label: "Todo" },
      { id: "alcancias", label: "Alcancías" },
      { id: "religiosas", label: "Figuras religiosas" },
      { id: "jardin", label: "Jardín" },
      { id: "sahumerios", label: "Cascadas & sahumerios" },
      { id: "animales", label: "Animales & deco" },
      { id: "otros", label: "Otros" }
    ]

    public products: Product[] = [
      { id: 1, name: 'Animales 1', description: 'Figura decorativa de animal', price: 10.99,
        category: 'animales', imageUrl: '/catalog/animales-1.jpg', variants: [] },
      { id: 2, name: 'Animales 2', description: 'Figura decorativa de animal', price: 15.99,
        category: 'animales', imageUrl: '/catalog/animales-2-variante-a.jpg', variants: [
          { name: 'Variante A', color: 'A', imageUrl: '/catalog/animales-2-variante-a.jpg' },
          { name: 'Variante B', color: 'B', imageUrl: '/catalog/animales-2-variante-b.jpg' },
          { name: 'Variante C', color: 'C', imageUrl: '/catalog/animales-2-variante-c.jpg' },
        ] },
      { id: 3, name: 'Sahumerios 1', description: 'Cascada o sahumerio', price: 20.99,
        category: 'sahumerios', imageUrl: '/catalog/saumerios-1.jpg', variants: [] },
      { id: 4, name: 'Sahumerios 2', description: 'Cascada o sahumerio', price: 20.99,
        category: 'sahumerios', imageUrl: '/catalog/saumerios-2.jpg', variants: [] },
      { id: 5, name: 'Sahumerios 3', description: 'Cascada o sahumerio', price: 20.99,
        category: 'sahumerios', imageUrl: '/catalog/saumerios-3.jpg', variants: [] },
      { id: 6, name: 'Religiosas 1', description: 'Figura religiosa', price: 15.99,
        category: 'religiosas', imageUrl: '/catalog/religiosas-1.jpg', variants: [] },
      { id: 7, name: 'Religiosas 2', description: 'Figura religiosa', price: 15.99,
        category: 'religiosas', imageUrl: '/catalog/religiosas-2.jpg', variants: [] },
      { id: 8, name: 'Otros 1', description: 'Artículo de decoración', price: 10.99,
        category: 'otros', imageUrl: '/catalog/otros-1.jpg', variants: [] },
    ];
}
