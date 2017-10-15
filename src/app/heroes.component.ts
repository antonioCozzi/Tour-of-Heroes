import { HeroService } from './hero.service';
import { Hero } from './hero';
import { AngularTourOfHeroesPage } from './../../e2e/app.po';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span>{{hero.name}}
    </li>
  </ul>
  <app-hero-detail [hero]= "selectedHero"></app-hero-detail>`,
  styleUrls: ['./app.component.css']
})

export class HeroesComponent implements OnInit{

  ngOnInit(): void {
    this.getHeroes()
  }

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService){}

  onSelect(hero: Hero):void {
    this.selectedHero = hero
  }

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  /*getHeroesSlowly(): void{
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes)
  }*/
}
