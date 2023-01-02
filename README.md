# Repositorio com Docker compose das seguintes aplicações

* Airflow
* NodeJs + Mysql (login) 
* Zabbix Server + Mysql + Grafana + Zabbix Agent






# Comandos úteis
* Ver os ips de todos os containers:

docker inspect $(docker ps -q ) \
--format='{{ printf "%-50s" .Name}} {{range .NetworkSettings.Networks}}{{.IPAddress}} {{end}}'

* Ver as portas usadas:

docker container ls --format "table {{.ID}}\t{{.Names}}\t{{.Ports}}" -a
