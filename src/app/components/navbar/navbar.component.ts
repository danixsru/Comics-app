import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  termBusqueda: string = ' ';

  constructor(private router:Router){}

  realizarBusqueda(evento: Event, termino: string) {
    evento.preventDefault();
    this.redireccionarALaRuta('/heroes', { terminoBusqueda: termino });
  }
  
  redireccionarALaRuta(ruta: string, parametros: { [key: string]: any }) {
    this.router.navigate([ruta], { queryParams: parametros });
  }
}
