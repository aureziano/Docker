![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
# Repositorio com Docker compose das seguintes aplicações

* Airflow
* NodeJs + Mysql (login) 
* Zabbix Server + Mysql + Grafana + Zabbix Agent






# Comandos úteis
* Ver os ips de todos os containers:

```
docker inspect $(docker ps -q ) \
--format='{{ printf "%-50s" .Name}} {{range .NetworkSettings.Networks}}{{.IPAddress}} {{end}}'
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
