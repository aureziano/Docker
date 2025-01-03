![MinIO](https://img.shields.io/badge/MinIO-Cloud%20Storage-%230075be?logo=minio&logoColor=white)

# Minio (nó único)

## Sumário

1. [Pré-requisitos](#pré-requisitos)
2. [Como Usar](#como-usar)
3. [Variaveis](#Variaveis)


## Pré-requisitos
- Docker instalado ([Instalação do Docker](https://docs.docker.com/get-docker/))
- Docker Compose instalado ([Instalação do Docker Compose](https://docs.docker.com/compose/install/))

## Como Usar

1. Clone o Repositório
    ```bash
    git clone https://github.com/aureziano/Docker.git
    cd ./Docker/Minio/
    ```

3. Execute o Docker Compose
    ```bash
    docker-compose up -d
    ```

## Variaveis

* MINIO_ROOT_USER e MINIO_ROOT_PASSWORD são duas variáveis ​​de ambiente importantes no arquivo docker-compose. 
* MINIO_ROOT_USER é a chave de acesso do usuário root e MINIO_ROOT_PASSWORD é a chave secreta do usuário root como suas credenciais S3. Substitua esses valores por strings longas, aleatórias e exclusivas.

* Observe que há dois números de porta quando você executa o servidor MinIO:

* A porta do MinIO Console tem 9001 como valor padrão.

* A porta da API , para conectar e executar operações no MinIO por meio de APIs, que defini como um número de porta estática 9000 no arquivo docker-compose.
