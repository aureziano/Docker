# Ambiente PHP 7.3 com Apache usando Docker Compose

[![PHP Version](https://img.shields.io/badge/PHP-7.3-blue)](https://www.php.net/releases/7_3_0.php)
[![Apache](https://img.shields.io/badge/Apache-2.4-blue)](https://httpd.apache.org/)
[![Docker Compose](https://img.shields.io/badge/Docker%20Compose-3-brightgreen)](https://docs.docker.com/compose/)

Este repositório contém um arquivo `docker-compose.yml` para configurar um ambiente PHP 7.3 com Apache usando Docker Compose. O ambiente consiste em um contêiner PHP 7.3 com um servidor Apache configurado.

## Pré-requisitos
- Docker instalado ([Instalação do Docker](https://docs.docker.com/get-docker/))
- Docker Compose instalado ([Instalação do Docker Compose](https://docs.docker.com/compose/install/))

## Como Usar

### Passo 1: Clone o Repositório
```bash
git clone https://github.com/aureziano/Docker.git
cd ./PHP/app_version_php
```
Passo 2: Execute o Docker Compose
```bash
docker-compose up -d
```
## Serviço PHP 7.3 com Apache
* Imagem: PHP 7.3 com Apache
* Porta Exposta: 80 (pode ser alterada no arquivo docker-compose.yml)
* Rede: bridge_network
* Volume: Mapeia o diretório local para o diretório /var/www/html/ dentro do contêiner.
O arquivo index.php contém uma simples chamada para phpinfo(), que exibirá informações detalhadas sobre a configuração do PHP e do Apache.

Observação: Certifique-se de que o arquivo index.php está no diretório raiz do seu projeto.
