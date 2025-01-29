package com.pontta.desafio.dtos;

import com.pontta.desafio.entities.Client;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ClientDTO {
	
	private Long id;
	@NotBlank
	@Size(min = 2, max = 55)
	private String name;
	@NotBlank
	@Email
	private String email;
	
	public ClientDTO() {}

	public ClientDTO(Long id, String name, String email) {
		this.id = id;
		this.name = name;
		this.email = email;
	}
	
	public ClientDTO(Client client) {
		id = client.getId();
		name = client.getName();
		email = client.getEmail();
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}
}
