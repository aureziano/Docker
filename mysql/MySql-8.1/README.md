# MySQL Docker Compose Configuration

[![MySQL](https://img.shields.io/badge/MySQL-8.1-blue)](https://hub.docker.com/_/mysql)
[![Docker Compose](https://img.shields.io/badge/Docker%20Compose-3.7-brightgreen)](https://docs.docker.com/compose/compose-file/)

Este arquivo Docker Compose é usado para configurar um serviço MySQL usando a imagem MySQL 8.1.

## Utilização

1. Clone este repositório.
2. Crie um arquivo `.env` e defina as variáveis de ambiente necessárias.
3. Execute `docker-compose up -d` para iniciar o contêiner do MySQL.

## Variáveis de Ambiente

Certifique-se de definir as seguintes variáveis de ambiente no arquivo `.env`:

- `DB_MYSQL_PORT`: A porta na qual o MySQL será exposto.
- `DB_MYSQL_NAME`: O nome do banco de dados MySQL.
- `DB_MYSQL_USER`: O usuário do MySQL.
- `DB_MYSQL_PASSWORD`: A senha do usuário do MySQL.
- `DB_MYSQL_ROOT_PASSWORD`: A senha do root do MySQL.

```yaml
version: "3.7"

services:

  mysql_8_1:
    image: mysql:8.1
    container_name: mysql_8_1
    restart: always
    env_file: .env
    stdin_open: true
    tty: true
    ports:
      - ${DB_MYSQL_PORT}:3306
    networks:
      - mysql-network-8_1
    command:
      ["--max-allowed-packet=128M","--innodb-log-file-size=64M","--character-set-server=utf8mb4","--collation-server=utf8mb4_unicode_ci"]
    volumes:
      - mysql-data-8_1:/var/lib/mysql
    healthcheck:
      test:
        ["CMD","mysqladmin","ping","-u","root","--password=${DB_MYSQL_ROOT_PASSWORD}"]
      interval: 10s
      timeout: 5s
      retries: 5
    environment:
      MYSQL_DATABASE: ${DB_MYSQL_NAME}
      MYSQL_USER: ${DB_MYSQL_USER}
      MYSQL_PASSWORD: ${DB_MYSQL_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${DB_MYSQL_ROOT_PASSWORD}

networks:
  mysql-network-8_1:
    name: mysql-network-8_1

volumes:
  mysql-data-8_1:
