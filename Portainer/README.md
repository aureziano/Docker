# Portainer Docker Setup

![Docker](https://img.shields.io/badge/Docker-✔-blue)
![Portainer](https://img.shields.io/badge/Portainer-CE-green)

## Pré-requisitos
- Docker instalado ([Instalação do Docker](https://docs.docker.com/get-docker/))

## Como usar

### Passo 1: Clone o repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```
## Passo 2: Execute o contêiner do Portainer
```docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce```
