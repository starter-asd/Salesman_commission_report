import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload-sales',
  templateUrl: './upload-sales.component.html',
  styleUrls: ['./upload-sales.component.css']
})
export class UploadSalesComponent  {
  salesmanFile: File | null = null;
  productFile: File | null = null;

  constructor(private http: HttpClient) { }

  onSalesmanFileSelected(event: any): void {
    this.salesmanFile = event.target.files[0];
  }

  onProductFileSelected(event: any): void {
    this.productFile = event.target.files[0];
  }

  uploadFile(fileInput1 : HTMLInputElement, fileInput2 : HTMLInputElement) {
    if (!this.salesmanFile || !this.productFile) {
      console.error('Please select both salesman and product files.');
      return;
    }

    const formData = new FormData();
    formData.append('salesmanFile', this.salesmanFile as File, this.salesmanFile.name);
    formData.append('productFile', this.productFile as File, this.productFile.name);

    this.http.post('http://localhost:8080/sales', formData,{responseType: 'json'}).subscribe(
      response => {
        console.log('Upload successful!');
      }
    );
  }

}
