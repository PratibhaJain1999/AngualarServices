import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import {  FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductServService } from './product-serv.service';

@NgModule({
  declarations: [
    AppComponent,
    ManageProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
