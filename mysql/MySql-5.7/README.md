# MySQL Docker Compose Configuration

[![MySQL](https://img.shields.io/badge/MySQL-5.7-blue)](https://hub.docker.com/_/mysql)
[![Docker Compose](https://img.shields.io/badge/Docker%20Compose-3.7-brightgreen)](https://docs.docker.com/compose/compose-file/)

Este arquivo Docker Compose é usado para configurar um serviço MySQL usando a imagem MySQL 5.7.

## Serviço MySQL (mysql_5_7)

O serviço MySQL usa a imagem oficial do MySQL 5.7. Ele é configurado com as seguintes opções:

- **container_name**: Nome do contêiner Docker.
- **restart**: A política de reinicialização do contêiner (sempre reiniciar).
- **env_file**: Arquivo de ambiente contendo variáveis de ambiente necessárias.
- **stdin_open** e **tty**: Configurações para interatividade com o terminal.
- **ports**: Mapeamento de porta do host para o contêiner MySQL.
- **networks**: Configuração da rede para o serviço.
- **command**: Parâmetros de inicialização adicionais para o MySQL.
- **volumes**: Mapeamento do volume para armazenar dados persistentes.
- **healthcheck**: Verificação de integridade do contêiner.
- **environment**: Configurações de ambiente necessárias para o MySQL.

### Parâmetros Adicionais do MySQL

- `--max-allowed-packet=128M`: Define o tamanho máximo do pacote permitido.
- `--innodb-log-file-size=64M`: Define o tamanho do arquivo de log InnoDB.
- `--character-set-server=utf8mb4`: Define o conjunto de caracteres do servidor como utf8mb4.
- `--collation-server=utf8mb4_unicode_ci`: Define a colação do servidor como utf8mb4_unicode_ci.

## Networks

O serviço MySQL está conectado a uma rede personalizada chamada `mysql-network-5_7`.

## Volumes

O serviço MySQL usa um volume chamado `mysql-data-5_7` para armazenar dados persistentes.

---

