import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  heroes: Hero[] = [];

  constructor(private heroservice: HeroService){}

  ngOnInit() {
    this.heroservice.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5))
  }
}
