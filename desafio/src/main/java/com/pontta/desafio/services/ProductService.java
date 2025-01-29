package com.pontta.desafio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pontta.desafio.dtos.ProductDTO;
import com.pontta.desafio.entities.Product;
import com.pontta.desafio.repositories.ProductRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ProductService {	

	@Autowired
	private ProductRepository repository;
	
	@Transactional
	public ProductDTO insert (ProductDTO dto) {
		Product product = new Product();
		dtoToEntity(dto, product);
		product = repository.save(product);
		return new ProductDTO(product);
	}

	@Transactional
	public ProductDTO update (Long id, ProductDTO dto) {
		Product product = repository.getReferenceById(id);
		dtoToEntity(dto, product);
		product = repository.save(product);
		return new ProductDTO(product);
	}
	
	@Transactional(readOnly = true)
	public ProductDTO findById(Long id) {
		Product product = repository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Produto não encontrado"));
		return new ProductDTO(product);
	}
	
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List<Product> products = repository.findAll();
		return products.stream().map(c -> new ProductDTO(c)).toList();
	}
	
	@Transactional
	public void delete(Long id) {
		if(!repository.existsById(id)) {
			throw new EntityNotFoundException("Produto não encontrado");
		}
		else {
			repository.deleteById(id);
		}
	}
	
	public void dtoToEntity(ProductDTO dto, Product product) {
		product.setName(dto.getName());
		product.setDescription(dto.getDescription());
	}

}
