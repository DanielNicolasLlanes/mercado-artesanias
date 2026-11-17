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
    {id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 10.99, 
      category: "alcancias",
      variants: [{name: 'Variante 1', color: 'Rojo', imageUrl: 'url1'}, 
                 {name: 'Variante 2', color: 'Azul', imageUrl: 'url2'}]},

    {id:2, name: 'Producto 2', description: 'Descripción del producto 2', price: 15.99, 
      category: "religiosas",
      variants: [{name: 'Variante 1', color: 'Verde', imageUrl: 'url3'}, 
                 {name: 'Variante 2', color: 'Amarillo', imageUrl: 'url4'}]},

    {id:3, name: 'Producto 3', description: 'Descripción del producto 3', price: 20.99, 
      category: "jardin",
      variants: [{name: 'Variante 1', color: 'Negro', imageUrl: 'url5'}, 
                 {name: 'Variante 2', color: 'Blanco', imageUrl: 'url6'}]}
  ]
}
