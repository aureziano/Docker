# Configuração do Ambiente Moodle com Docker Compose

[![MySQL](https://img.shields.io/badge/MySQL-5.7-blue)](https://hub.docker.com/_/mysql)
[![Moodle](https://img.shields.io/badge/Moodle-ellakcy/mysql_maria_apache-green)](https://hub.docker.com/r/ellakcy/moodle)

Este repositório contém um arquivo `docker-compose.yml` para configurar um ambiente Moodle usando Docker Compose. Ele consiste em dois serviços principais: `moodle_db` para o banco de dados MySQL e `moodle` para o próprio Moodle.

## Pré-requisitos
- Docker instalado ([Instalação do Docker](https://docs.docker.com/get-docker/))
- Docker Compose instalado ([Instalação do Docker Compose](https://docs.docker.com/compose/install/))

## Como Usar

### Passo 1: Clone o Repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```
### Passo 2: Configure o Ambiente
Edite o arquivo .env com as variáveis necessárias.

### Passo 3: Execute o Docker Compose
```bash
docker-compose up -d
```
## Serviços e Configurações

### 1. moodle_db - MySQL 5.7

Imagem: MySQL 5.7
Porta Exposta: `3306`
Rede: `mysql-network-5_7`
Volume: `moodledb_mysql`
Comandos Adicionais:
  * `--character-set-server=utf8mb4`
  * `--collation-server=utf8mb4_general_ci`
Healthcheck: Testa a conexão com o MySQL.

###2.  `moodle` - Moodle com MySql e Apache

* Imagem: ellakcy/moodle:mysql_maria_apache
* Porta Exposta: 80
* Rede: `mysql-network-5_7`
* Volumes:
  `./data/moodle:/var/moodledata`
   `www_mysql_apache:/var/www/html`
* Configurações:
    `MOODLE_URL`, `MOODLE_ADMIN`, `MOODLE_ADMIN_PASSWORD`, etc.
    Conecta-se ao banco de dados MySQL no serviço `moodle_db`.
* Rede Externa: `mysql-network-5_7`

Lembrando que os detalhes da rede `mysql-network-5_7` nesse caso foi usada uma rede externa que já estava em funcionamento, caso deseja criar uma rede poderá substituir a parte de declaração da rede por :

```
networks:
  <nome_da_sua_rede>:
```
    
