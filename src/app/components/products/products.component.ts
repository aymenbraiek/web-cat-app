import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
// ? que le products pourra un valeur par defaut(la valuer est obsolete ) version 11 /2 syntaxe est utliser soit 
// products?:Product[];
 products:Product[] | null=null;
 
//injecter le sercies 
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllproducts(){
    this.productsService.getAllProducts().subscribe(data =>{
      this.products=data;
    })}

}
