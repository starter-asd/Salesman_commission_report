package com.example.sales.entity;

public class ProductDetail {
	String product;
String area;
int totalQuantity;
int totalSales;

public ProductDetail() {
}
public ProductDetail(String product,String area, int totalQuantity, int totalSales) {
super();
this.product = product;
this.area = area;
this.totalQuantity = totalQuantity;
this.totalSales = totalSales;

}


public String getProduct() {
	return product;
}
public void setProduct(String product) {
	this.product = product;
}
public String getArea() {
return area;
}
public void setArea(String area) {
this.area = area;
}
public int getTotalQuantity() {
return totalQuantity;
}
public void setTotalQuantity(int totalQuantity) {
this.totalQuantity = totalQuantity;
}
public int getTotalSales() {
return totalSales;
}
public void setTotalSales(int totalSales) {
this.totalSales = totalSales;
}
}