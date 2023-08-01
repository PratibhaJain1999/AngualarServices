import { Injectable } from '@angular/core';
import { proFamily } from './product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamProductService {
  private productList!:BehaviorSubject<proFamily[]>

  products:proFamily[]=[
    new proFamily('01','Mobile','25000'),
    new proFamily('02','Telephone','25000'),
    new proFamily('03','Laptop','25000'),


  ]

  constructor() { 
    this.productList = new BehaviorSubject<proFamily[]>(this.products);

  }
  getProducts(){
    return this.products;
  }
  updateRecipe(product:any){
    this.products=product;
}
setValue(value:any) {
    this.productList.next(value);
}

getValue() : Observable<proFamily[]> {
    return this.productList.asObservable();
}
}
