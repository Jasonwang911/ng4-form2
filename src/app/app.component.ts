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
  constructor(private heros: HeroService) {
    this.model = heros.createHero();
  }

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

}
