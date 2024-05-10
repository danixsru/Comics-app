import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Heroe[]=[];
  heroesFiltrados: Heroe[] = [];
  term: string = '';

  constructor(
    private _heroesService:HeroesService, 
    private router:Router, 
    private route:ActivatedRoute){
  }

  private actualizarListadoDeHeroes() {
    if (!this.term.trim()) {
      this.heroes = this._heroesService.getHeroes();
    } else {
      this.heroes = this._heroesService.filtrarHeroesPorTermino(this.term);
    }
  }
  
  ngOnInit():void{
    this.route.queryParams.subscribe(params => {
      this.term = params['terminoBusqueda'] || '';
      this.actualizarListadoDeHeroes();
    });
  }

  verHeroe(idx:number){
    const index = this.heroes.indexOf(this.heroes[idx]);
    this.router.navigate(['/heroe', idx]);
    console.log(idx);
  }
}
