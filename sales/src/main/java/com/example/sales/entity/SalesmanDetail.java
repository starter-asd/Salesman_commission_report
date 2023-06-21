package com.example.sales.entity;

public class SalesmanDetail {
String Name;
String area;
int totalValue;
int totalCommission;
public SalesmanDetail() {
}
public SalesmanDetail(String Name,String area, int totalValue, int totalCommission) {
super();
this.Name=Name;
this.area = area;
this.totalValue = totalValue;
this.totalCommission = totalCommission;
}
public String getName() {
return Name;
}
public void setName(String name) {
Name = name;
}
public String getArea() {
return area;
}
public void setArea(String area) {
this.area = area;
}
public int getTotalValue() {
return totalValue;
}
public void setTotalValue(int totalValue) {
this.totalValue = totalValue;
}
public int getTotalCommission() {
return totalCommission;
}
public void setTotalCommission(int totalCommission) {
this.totalCommission = totalCommission;
}
}