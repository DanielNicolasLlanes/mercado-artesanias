import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Catalog } from './components/catalog/catalog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mercado-artesanias');
}
