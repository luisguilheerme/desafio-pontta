# Desafio FullStack - CRUD

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

Docker

Docker Compose

Java 17+

Maven

Node.js

Angular CLI

## Como rodar o projeto

Inicie o PostgreSQL com Docker:

Para iniciar apenas o banco de dados, execute:

```bash
docker-compose up -d
```

Inicie o backend:

No diretório desafio/, execute os seguintes comandos:

```bash
mvn clean install
mvn spring-boot:run
```

O backend estará disponível em http://localhost:8080.

Inicie o frontend:

No diretório frontend/, execute os seguintes comandos:
```bash
npm install
ng serve
```
