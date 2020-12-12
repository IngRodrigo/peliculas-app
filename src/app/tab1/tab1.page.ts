import { Component, OnInit } from '@angular/core';
import { Pelicula} from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
//rod_dev: implementamos el OnInit para usar su metodo ngOnInit() que se ejecute al iniciar la app
export class Tab1Page implements OnInit{

  //mis variables
  peliculasRecientes: Pelicula[]=[];
  //mostrar opciones al slider
  slideOpts={
    slidesPerView:1.1,
    freMode: true
  }

  //rod_dev: inyectamos el servicio en el constructor de la clase
  constructor(private movieService:MoviesService) {}

  ngOnInit(){
    //rod_dev: llamamos al metodo del servicio en este caso el que trae todos los estrenos de cartelera
    this.movieService.getCarteleraPeliculas()
    .subscribe((respuesta)=>{
     // console.log(respuesta.results);
      this.peliculasRecientes=respuesta.results;
    });
  }
}
