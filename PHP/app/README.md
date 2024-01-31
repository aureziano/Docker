# Ambiente PHP 7.3 com Apache e MySQL usando Docker Compose

[![PHP Version](https://img.shields.io/badge/PHP-7.3-blue)](https://www.php.net/releases/7_3_0.php)
[![Apache](https://img.shields.io/badge/Apache-2.4-blue)](https://httpd.apache.org/)
[![MySQL](https://img.shields.io/badge/MySQL-5.7-blue)](https://hub.docker.com/_/mysql)
[![Docker Compose](https://img.shields.io/badge/Docker%20Compose-3.7-brightgreen)](https://docs.docker.com/compose/)

Este repositório contém um arquivo `docker-compose.yml` para configurar um ambiente PHP 7.3 com Apache e MySQL usando Docker Compose.

## Pré-requisitos
- Docker instalado ([Instalação do Docker](https://docs.docker.com/get-docker/))
- Docker Compose instalado ([Instalação do Docker Compose](https://docs.docker.com/compose/install/))

## Como Usar

### Passo 1: Clone o Repositório
```bash
git clone https://github.com/aureziano/Docker.git
cd ./PHP/app/
```
## Passo 2: Execute o Docker Compose
bash
Copy code
docker-compose up -d
## Serviço PHP 7.3 com Apache
* Imagem: PHP 7.3 com Apache
* Porta Exposta: 80 (pode ser alterada no arquivo `docker-compose.yml`)
* Volume: Mapeia o diretório local para o diretório `/var/www/html/` dentro do contêiner.
O serviço também instala as dependências necessárias para o PHP, como o cliente MySQL.

## Serviço MySQL 5.7
* Imagem: MySQL 5.7
* Rede Externa: `mysql-network-5_7` (certifique-se de que a rede já existe no Docker)
O PHP está configurado para se conectar ao MySQL usando o nome do serviço `mysql_5_7` como host e a porta 3306.

*Observação*: Certifique-se de que o arquivo `index.php` está no diretório raiz do seu projeto.

## Criação do banco de dados e usuario para o php

### Criação de usuario com privilegios e o database
```
CREATE DATABASE IF NOT EXISTS app_php;
CREATE USER 'phpuser'@'%' IDENTIFIED BY '123456';
GRANT all privileges ON app_php.* TO 'phpuser'@'%' WITH GRANT OPTION;
flush privileges;
```
### Criação das tabelas

Executar os comandos MySql do arquivo `db_my.sql`.

Adaptação do projeto de https://github.com/ribafs/aplicativos-php

