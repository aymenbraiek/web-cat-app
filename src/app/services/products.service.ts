import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }


  //getall products
  getAllProducts()
  {
    let host=environment.host;
    return this.http.get(host+"/products")
}
