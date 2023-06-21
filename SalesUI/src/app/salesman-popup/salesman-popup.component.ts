import { Component, Inject, Input, OnInit } from '@angular/core';
import { SalesmanInfo } from '../salesman-info/salesman-info.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-salesman-popup',
  templateUrl: './salesman-popup.component.html',
  styleUrls: ['./salesman-popup.component.css']
})
export class SalesmanPopupComponent implements OnInit{
  

  constructor(
    public dialogRef : MatDialogRef<SalesmanPopupComponent>,
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
