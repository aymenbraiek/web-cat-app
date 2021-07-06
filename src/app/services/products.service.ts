import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';
//Injectable this service is enabled to root racine
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
// Dependency Injection http
  constructor(private http:HttpClient) { }


  //getall products to service
  //on sait que notre methodes et retouner un objet de type observable contient liste de produits
  getAllProducts():Observable<Product[]>
  {
    let host=environment.host;
    //methode get declarer le type => j attend une liste des produits 
    return this.http.get<Product[]>(host+"/products")
}

//method qui definit que les produits selected 
getSelectedProducts()
  {
    let host=environment.host;
    return this.http.get(host+"/products?selected=true");
}

//method qui definit que les produits selected 
getAvailableProducts()
  {
    let host=environment.host;
    return this.http.get(host+"/products?available=true");
}

}
