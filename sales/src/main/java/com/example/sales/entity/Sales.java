package com.example.sales.entity;

import java.util.List;

public class Sales {

	public List<Salesman> salesmen;
	public List<Product> products;
	public List<Salesman> getSalesmen() {
		return salesmen;
	}
	public void setSalesmen(List<Salesman> salesman) {
		this.salesmen = salesman;
	}
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	
	
	
}
