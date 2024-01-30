![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=plastic)
[![Docker Hub](https://img.shields.io/docker/v/owncloud/base?logo=docker&label=dockerhub&sort=semver&logoColor=white)](https://hub.docker.com/r/owncloud/base)
![Badge Zabbix](https://img.shields.io/static/v1?label=Zabbix&message=5.0&color=blue&style=plastic)
![Badge Mysql](https://img.shields.io/static/v1?label=MySql&message=5.7&color=blue&style=plastic)
![Badge Grafana](https://img.shields.io/static/v1?label=Grafana&message=9.3&color=blue&style=plastic)
[![Moodle](https://img.shields.io/badge/Moodle-ellakcy/mysql_maria_apache-green)](https://hub.docker.com/r/ellakcy/moodle)
[![Portainer](https://img.shields.io/badge/Portainer-CE-blue)](https://hub.docker.com/r/portainer/portainer-ce)
# Repositorio com Docker compose das seguintes aplicações

* Airflow
* NodeJs + Mysql (login) 
* Zabbix Server + Mysql + Grafana + Zabbix Agent
* Streama + Mysql + Nginx
* Portainer
* Moodle
* MySql (5.7 e 8.1)


# Comandos úteis
* Ver os ips de todos os containers:

```
docker inspect $(docker ps -q ) --format='{{ printf "%-50s" .Name}} {{range .NetworkSettings.Networks}}{{.IPAddress}} {{end}}'
```

* Ver as portas usadas:
```
docker container ls --format "table {{.ID}}\t{{.Names}}\t{{.Ports}}" -a
```

* Parar todos os container 

```
docker stop $(docker ps -a -q)
```

* Remover todos os containers parados

```
docker rm $(docker ps -a -q)
```

* Remover container especifico

```
docker rm <id ou nome do container>
```

* Remover todos os volumes
```
docker volume rm $(docker volume ls -q)
```
* Remover todos os volumes sem utilização
```
docker system prune --all --force --volumes
```
* Para os containers e remove seus volumes e rede
```
docker-compose down -v
```
* Acompanhar logs
```
docker-compose logs --follow <container ID>
```
* Reiniciar container
```
docker restart <container ID>
```
* Copiar arquivo para o container
```
docker cp <endereco_local> <container ID>:<endereco_container>
```
* Copiar arquivo do container para a máquina
```
docker cp <container ID>:<endereco_container> <endereco_local>
```
* Executar como root no container
```
docker exec -it -u 0 <container ID> bash
```

* Logs no container
```
docker logs -n --tail <nome_container>
```


