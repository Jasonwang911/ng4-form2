import { Component } from '@angular/core';
import { HeroService } from './shared/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hero: any;

  submitted = false;
  constructor(private heros: HeroService) {
    this.hero = heros.createHero();
  }

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

}
