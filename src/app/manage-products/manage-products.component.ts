import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServService } from '../product-serv.service';
import { HttpClient } from '@angular/common/http';
import { proFamily } from '../product.model';
import { FamProductService } from '../fam-product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  title='UX-Products'
  products:proFamily[]=[
   
  ]
  constructor(private prpserv:ProductServService ,private  http:HttpClient, private fampro:FamProductService){}
  ngOnInit(): void {
    this.products=this.fampro.getProducts();

    this.fampro.setValue(this.products);
    this.fampro.getValue().subscribe(value=>{
      this.products=value;





    })
  }
  deleteProduct(i:number){

  }
 
  saveProduct(){
    this.prpserv.getProducts();




    
     
  }
fetchProduct(){
  
    this.prpserv.fetchProducts()
  


}
onSubmit(dataPost:any){
  console.log(dataPost)
  this.products.push(dataPost)



 
    }
    collectPost(){
  
    }
    clearPost(){
  
    }
}
