package com.pontta.desafio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pontta.desafio.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{

}
