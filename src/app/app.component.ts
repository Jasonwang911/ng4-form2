import { Component } from '@angular/core';
import { HeroService } from './shared/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: any;
  powers = ['聪明绝顶', '善于沟通',
  '有领导力', '善于改变'];
  submitted = false;
  newHeroOne:any;

  constructor(private heros: HeroService) {
    this.model = heros.createHero();
    this.newHeroOne = heros.newHero();
  }

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = this.newHeroOne;
    console.log(this.model);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
