import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wsp-button',
  imports: [],
  templateUrl: './wsp-button.html',
  styleUrl: './wsp-button.css',
})
export class WspButton {
  @Input({ required: true }) product!: Product;
  @Input() selectedVariant?: ProductVariant;

  get whatsappUrl(): string {
    const variantText = this.selectedVariant
      ? ` Variante seleccionada: ${this.selectedVariant.name}.`
      : '';
    const message = `Hola, quisiera consultar por la figura de yeso ${this.product.name}.${variantText}`;

    return `https://wa.me/5493513131172?text=${encodeURIComponent(message)}`;
  }
}
