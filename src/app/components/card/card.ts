import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WspButton } from '../wsp-button/wsp-button';

@Component({
  selector: 'app-card',
  imports: [CommonModule, WspButton],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input( {required: true} ) product! : Product;
  selectedVariant = 0;
}
