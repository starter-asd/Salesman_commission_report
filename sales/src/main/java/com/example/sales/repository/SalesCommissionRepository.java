package com.example.sales.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sales.entity.SalesCommission;

@Repository
public interface SalesCommissionRepository extends JpaRepository<SalesCommission, Integer>{

	
}
