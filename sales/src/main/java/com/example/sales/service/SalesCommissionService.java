package com.example.sales.service;

import java.time.LocalDate;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import com.example.sales.entity.Product;
import com.example.sales.entity.ProductDetail;
import com.example.sales.entity.Sales;
import com.example.sales.entity.SalesCommission;
import com.example.sales.entity.Salesman;
import com.example.sales.entity.SalesmanDetail;
import com.example.sales.repository.SalesCommissionRepository;

@Service
public class SalesCommissionService{
	
	@Autowired
	private SalesCommissionRepository salesCommissionRepository;
	
	@Autowired
	JdbcTemplate j;
	
	Sales sales;

	public void saveSalesCommission(Sales sales) {
		int i = 1;
		for(Salesman s : sales.getSalesmen()){
			for(Product product : sales.getProducts()) {
				double commissionRate = 1.0;
				double salesAmount = 1.0;
				double salesmanCommission = 1.0;
				if(s.getSalesman_id() == product.getSalesman_id()){
				SalesCommission obj = new SalesCommission();
				commissionRate = s.getCommission_rate();
				 salesAmount = product.getQuantity() * product.getPrice_per_unit();
				 salesmanCommission = (salesAmount * commissionRate)/100;
				obj.setId(i++);
				obj.setProduct(product.getProduct_name());
				obj.setProduct_quantity(product.getQuantity());
				obj.setSale_amount(salesAmount);
				obj.setSalesman_name(s.getSalesman_name());
				obj.setSalesman_commission(salesmanCommission);
				obj.setSalesman_area(s.getSalesman_area());
				obj.setCreatedDate(LocalDate.now());
//				
				salesCommissionRepository.save(obj);
				}
				
			}
				
		}
	}
	
	
	@SuppressWarnings("deprecation")
	public List<SalesCommission> getSalesCommissionByDate(LocalDate date){
		
		String sql = "SELECT * FROM Salesman_Commission WHERE created_date = ?";
		List<SalesCommission> salesCommission = j.query(sql, new Object[]{date}, new BeanPropertyRowMapper<>(SalesCommission.class));
		return salesCommission;
		
		}


	@SuppressWarnings("deprecation")
	public List<SalesmanDetail> getSalesCommissionBySalesmanName(String salesman_name) {
		// TODO Auto-generated method stub
		String sql =  "SELECT salesman_name as Name, salesman_area as area, SUM(sale_amount) as totalValue, SUM(salesman_commission) as totalCommission FROM Salesman_Commission WHERE salesman_name =? \r\n"
				+ "GROUP BY salesman_name, salesman_area;";
		List<SalesmanDetail> salesmanDetail = j.query(sql, new Object[]{salesman_name}, new BeanPropertyRowMapper<>(SalesmanDetail.class));
		return salesmanDetail;
		
	}


	@SuppressWarnings("deprecation")
	public List<ProductDetail> getSalesCommissionByProduct(String product) {
		// TODO Auto-generated method stub
		String sql =  "SELECT product as product, salesman_area as area, SUM(product_quantity) as totalQuantity, SUM(sale_amount) as totalSales\r\n"
				+ "FROM Salesman_Commission \r\n"
				+ "WHERE product = ? \r\n"
				+ "GROUP BY product, salesman_area;";
		List<ProductDetail> productDetail = j.query(sql, new Object[]{product}, new BeanPropertyRowMapper<>(ProductDetail.class));
		return productDetail;
		
	}

	
	}


	

