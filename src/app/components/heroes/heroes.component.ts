import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes:Heroe[] = [];
  
  constructor( 
  	private _heroesService: HeroesService,
  	private _router: Router
  ) { 

  }

  ngOnInit(): void {

  	this.heroes = this._heroesService.getHeroes();

  }

  verHeroe( idx:number ): void{
  	this._router.navigate(['/heroe', idx]);
  }

}
