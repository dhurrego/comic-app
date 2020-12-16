import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html'
})
export class SearchHeroesComponent implements OnInit {
  
  public heroes: Heroe[];
  public termino: string;

  constructor( 
  	private _heroeService: HeroesService,
  	private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  	this._route.params.subscribe( params => {
  		this.termino = params['termino'];
  		if(this.termino == ''){
  			this.termino = 'Todos';
  		}
  		this.heroes = this._heroeService.buscarHeroes(params['termino']);
  	});
  	
  }

}
