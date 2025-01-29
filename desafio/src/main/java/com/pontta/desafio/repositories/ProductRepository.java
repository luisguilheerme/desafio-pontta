package com.pontta.desafio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pontta.desafio.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
