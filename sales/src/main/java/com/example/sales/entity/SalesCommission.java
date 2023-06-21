package com.example.sales.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Salesman_Commission")
public class SalesCommission{
	
	
	@Id
	private int id;
	
	@Column(name = "product")
	private String product;
	
	@Column(name = "product_quantity")
	private int product_quantity;
	
	@Column(name = "sale_amount")
	private double sale_amount;
	
	@Column(name = "salesman_name")
	private String salesman_name;
	
	@Column(name = "salesman_commission")
	private double salesman_commission;
	
	@Column(name = "salesman_area")
	private String salesman_area;

	@Column(name = "created_date")
	LocalDate createdDate;


	public SalesCommission() {
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public int getProduct_quantity() {
		return product_quantity;
	}

	public void setProduct_quantity(int product_quantity) {
		this.product_quantity = product_quantity;
	}

	public double getSale_amount() {
		return sale_amount;
	}

	public void setSale_amount(double sale_amount) {
		this.sale_amount = sale_amount;
	}

	public String getSalesman_name() {
		return salesman_name;
	}

	public void setSalesman_name(String salesman_name) {
		this.salesman_name = salesman_name;
	}

	public double getSalesman_commission() {
		return salesman_commission;
	}

	public void setSalesman_commission(double salesman_commission) {
		this.salesman_commission = salesman_commission;
	}

	public String getSalesman_area() {
		return salesman_area;
	}

	public void setSalesman_area(String salesman_area) {
		this.salesman_area = salesman_area;
	}

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}
	
	
}
