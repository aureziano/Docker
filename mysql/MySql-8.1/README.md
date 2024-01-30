# Configuração do Docker Compose para MySQL

[![Docker](https://img.shields.io/badge/Docker-v20.10.5-blue?logo=docker)](https://www.docker.com/)
[![MySQL](https://img.shields.io/badge/MySQL-v8.1-blue?logo=mysql)](https://www.mysql.com/)

## Visão Geral

Esta configuração do Docker Compose estabelece um servidor MySQL 8.1 com configurações específicas, adequado para desenvolvimento e testes.

## Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado em sua máquina.
- Compreensão básica do Docker Compose.

## Iniciando

1. Clone este repositório:

    ```bash
    git clone https://github.com/seunome/seurepositorio.git
    cd seurepositorio
    ```

2. Crie um arquivo `.env` com a configuração do MySQL. Exemplo:

    ```env
    DB_MYSQL_PORT=3306
    DB_MYSQL_NAME=nomedoseubanco
    DB_MYSQL_USER=seuusuario
    DB_MYSQL_PASSWORD=suasenha
    DB_MYSQL_ROOT_PASSWORD=senharoot
    ```

3. Inicie o serviço do MySQL:

    ```bash
    docker-compose up -d
    ```

4. Acesse o MySQL com seu cliente MySQL preferido usando as credenciais configuradas.

## Detalhes da Configuração

- **Versão do MySQL**: 8.1
- **Portas**: A porta do host `${DB_MYSQL_PORT}` é mapeada para a porta 3306 do contêiner.
- **Volume**: Volume persistente para os dados do MySQL em `mysql-data-8_1`.
- **Health Check**: Verifica a disponibilidade do servidor MySQL.
- **Variáveis de Ambiente**:
  - `MYSQL_DATABASE`: Nome do banco de dados.
  - `MYSQL_USER`: Usuário do MySQL.
  - `MYSQL_PASSWORD`: Senha do usuário do MySQL.
  - `MYSQL_ROOT_PASSWORD`: Senha do root do MySQL.

## Acessando o MySQL

- **Host**: `localhost` ou `127.0.0.1`
- **Porta**: `${DB_MYSQL_PORT}`
- **Usuário**: `${DB_MYSQL_USER}`
- **Senha**: `${DB_MYSQL_PASSWORD}`

## Verificação de Saúde

Para verificar a saúde do contêiner MySQL, você pode usar o seguinte comando:

```bash
docker-compose ps


License
This Docker Compose setup is licensed under the MIT License.
