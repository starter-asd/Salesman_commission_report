package com.example.sales.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.sales.entity.Product;
import com.example.sales.entity.ProductDetail;
import com.example.sales.entity.Sales;
import com.example.sales.entity.SalesCommission;
import com.example.sales.entity.Salesman;
import com.example.sales.entity.SalesmanDetail;
import com.example.sales.service.SalesCommissionService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

@RestController
public class SalesCommissionController {
	
	@Autowired
	private SalesCommissionService salesCommissionService;
	
	@PostMapping("/sales")
	@CrossOrigin("*")
	public ResponseEntity<?> handleFileUpload(@RequestParam("salesmanFile") MultipartFile salesmanFile, @RequestParam("productFile")MultipartFile productFile){
		
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			List<Salesman> s = objectMapper.readValue(salesmanFile.getInputStream(), new TypeReference<List<Salesman>>() {});
			List<Product> p = objectMapper.readValue(productFile.getInputStream(), new TypeReference<List<Product>>() {});
			Sales sales = new Sales();
			sales.setSalesmen(s);
			sales.setProducts(p);
			
			salesCommissionService.saveSalesCommission(sales);
			return ResponseEntity.ok("Upload Successfully");
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Upload Error: " + e.getMessage());
		}
			
	}

	@GetMapping("/commission")
	@CrossOrigin("*")
	public List<SalesCommission> getSalesCommissionByDate(@RequestParam(name = "date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date){
		
		
			List<SalesCommission> salesCommissions = salesCommissionService.getSalesCommissionByDate(date);
			return salesCommissions;
			
			
}

@GetMapping("/commission/salesman")
@CrossOrigin("*")
public List<SalesmanDetail> getSalesCommissionBySalesmanName(@RequestParam(name = "salesman_name") String salesman_name){
	
	
	List<SalesmanDetail> salesmanDetail = salesCommissionService.getSalesCommissionBySalesmanName(salesman_name);
	return salesmanDetail;
	
	
}

@GetMapping("/commission/product_name")
@CrossOrigin("*")
public List<ProductDetail> getSalesCommissionByProduct(@RequestParam(name = "product_name") String product){
	
	
	List<ProductDetail> productDetail = salesCommissionService.getSalesCommissionByProduct(product);
	return productDetail;
	
	
}
}
	
