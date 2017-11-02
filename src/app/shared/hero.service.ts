import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  powers = ['聪明绝顶', '善于沟通',
  '有领导力', '善于改变'];

  constructor() { }

  createHero() {
    return new Hero(1, 'jason', this.powers[0], '好人');
  }

}

class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {

  }

}
