import { Component, Inject, Input } from '@angular/core';
import { ProductInfo } from '../product-info/product-info.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-show-product-popup',
  templateUrl: './show-product-popup.component.html',
  styleUrls: ['./show-product-popup.component.css']
})
export class ShowProductPopupComponent {
  constructor(
    public dialogRef : MatDialogRef<ShowProductPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ){
    console.log(data);
  }


  onCloseClick(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
    // this.getData();
  }
}
