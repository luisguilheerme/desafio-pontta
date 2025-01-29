package com.pontta.desafio.dtos;

import com.pontta.desafio.entities.Product;

import jakarta.validation.constraints.NotBlank;

public class ProductDTO {
	
	private Long id;
	@NotBlank
	private String name;
	@NotBlank
	private String description;
	
	public ProductDTO() {}

	public ProductDTO(Long id, String name, String description) {
		this.id = id;
		this.name = name;
		this.description = description;
	}
	
	public ProductDTO(Product product) {
		id = product.getId();
		name = product.getName();
		description = product.getDescription();
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}
}
