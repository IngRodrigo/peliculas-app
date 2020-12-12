import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaMDB } from '../interfaces/interfaces';


const URL=environment.urlApi;
const apiKey=environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }


  private ejecutarQuery<T>(query:string){
    //rod_dev:aramamos el query 
    query=URL+query;
    query+=`&api_key=${apiKey}&language=es&include_image_language=es`;
    console.log(query);
    return this.http.get(query);//rod_dev: se lo pasamos al metodo de la peticion
  }
  getCarteleraPeliculas(){
    const hoy= new Date();
    const ultimoDia= new Date(hoy.getFullYear(), hoy.getMonth()+1,0 ).getDate();
    //console.log(ultimoDia);

    //return this.http.get<RespuestaMDB>(`/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31&`);
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31`);
   }
}
