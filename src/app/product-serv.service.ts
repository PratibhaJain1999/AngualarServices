import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { FamProductService } from './fam-product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServService {

  constructor(private http:HttpClient,  private famaServ:FamProductService) { }

  // getProducts(products:{id:any,name:string,price:any})
  // {
  //   return this.http.put('https://angularservice01-default-rtdb.firebaseio.com/pratibha.json',products)
      
        
  //     }
  getProducts(){
     const productsFam=this.famaServ.getProducts();
          this.http.put('https://angularservice01-default-rtdb.firebaseio.com/pratibha.json',productsFam).subscribe(res=>{

         });



  }
    fetchProducts(){
      this.http.get('https://angularservice01-default-rtdb.firebaseio.com/pratibha.json').subscribe(res=>{

      this.famaServ.setValue(res)
      })

    }
    }

