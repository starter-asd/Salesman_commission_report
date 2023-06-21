import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProductInfo{
  area : string;
  totalQuantity : number;
  totalSales : number;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductInfoModule { 
}
