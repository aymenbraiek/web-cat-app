import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//Injectable this service is enabled to root racine
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
// Dependency Injection http
  constructor(private http:HttpClient) { }


  //getall products to service
  getAllProducts()
  {
    let host=environment.host;
    return this.http.get(host+"/products")
}

}
