package com.pontta.desafio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pontta.desafio.dtos.ClientDTO;
import com.pontta.desafio.entities.Client;
import com.pontta.desafio.repositories.ClientRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ClientService {
	
	@Autowired
	private ClientRepository repository;
	
	@Transactional
	public ClientDTO insert (ClientDTO dto) {
		Client client = new Client();
		dtoToEntity(dto, client);
		client = repository.save(client);
		return new ClientDTO(client);
	}

	@Transactional
	public ClientDTO update (Long id, ClientDTO dto) {
		Client client = repository.getReferenceById(id);
		dtoToEntity(dto, client);
		client = repository.save(client);
		return new ClientDTO(client);
	}
	
	@Transactional(readOnly = true)
	public ClientDTO findById(Long id) {
		Client client = repository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Cliente não encontrado"));
		return new ClientDTO(client);
	}
	
	@Transactional(readOnly = true)
	public List<ClientDTO> findAll() {
		List<Client> clients = repository.findAll();
		return clients.stream().map(c -> new ClientDTO(c)).toList();
	}
	
	@Transactional
	public void delete(Long id) {
		if(!repository.existsById(id)) {
			throw new EntityNotFoundException("Cliente não encontrado");
		}
		else {
			repository.deleteById(id);
		}
	}
	
	public void dtoToEntity(ClientDTO dto, Client client) {
		client.setName(dto.getName());
		client.setEmail(dto.getEmail());
	}
}
