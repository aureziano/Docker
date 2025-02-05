# Portainer Docker Setup

![Docker](https://img.shields.io/badge/Docker-✔-blue)
![Portainer](https://img.shields.io/badge/Portainer-CE-green)

## Pré-requisitos
- Docker instalado ([Instalação do Docker](https://docs.docker.com/get-docker/))

## Como usar

### Passo 1: Clone o repositório
```bash
cd nome-do-repo
```
## Passo 2: Execute o contêiner do Portainer
```
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```
Opções utilizadas:
* -d: Executa o contêiner em segundo plano (modo daemon).
* -p 8000:8000 -p 9000:9000: Mapeia as portas do host para as portas do contêiner.
* --name=portainer: Atribui um nome ao contêiner (neste caso, "portainer").
* --restart=always: Configura o contêiner para reiniciar automaticamente sempre que for interrompido.
* -v /var/run/docker.sock:/var/run/docker.sock: Monta o socket Docker para interação com o daemon Docker.
* -v portainer_data:/data: Monta um volume para persistência de dados do Portainer.

## Passo 3: Acesse o Portainer
Abra um navegador da web e vá para http://localhost:9000. Você será solicitado a criar uma senha de administrador e a escolher o ambiente (local ou remoto).

## Exemplo de senha
usuario : admin
senha : admin123456789
