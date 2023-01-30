![Badge Zabbix](http://img.shields.io/static/v1?label=&message=Zabbix&color=RED&style=for-the-badge)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)

## Instruções para configuração do Zabbix Server - Grafana

# Ambiente de treinamento docker
https://labs.play-with-docker.com/


# Instalação de Zabbix-Grafana por meio de docker compose 
https://github.com/carryontech/zabbix-docker-compose/blob/master/docker-compose.yml

# Criar pasta e aplicar o comando para execução do docker compose
```
docker-compose up -d
```

# Zabbix inicia na porta 80 e o Grafana na porta 3000
```
Zabbix:
	- Username: Admin
	- Password: zabbix
```	

```
Grafana:
	- Username: admin
	- Senha: admin
```



# Integração Grafana

https://medium.com/zabbix-brasil/integrando-zabbix-e-grafana-d46de4d1526d

# Configuração Zabbix Agent 2 para Mysql
Requirements for template operation:

* Create MySQL user for monitoring. For example:
```
CREATE USER 'zbx_monitor'@'%' IDENTIFIED BY '<password>';
```
```
GRANT USAGE,REPLICATION CLIENT,PROCESS,SHOW DATABASES,SHOW VIEW ON *.* TO
'zbx_monitor'@'%';
```
```
flush privileges;
```	
For more information read the MYSQL documentation https://dev.mysql.com/doc/refman/8.0/en/grant.html , please. 
	
* Set in the {$MYSQL.DSN} macro the system data source name of the MySQL instance such as <protocol(host:port or /path/to/socket)/>.
	
* Set the user name and password in host macros ({$MYSQL.USER} and {$MYSQL.PASSWORD}) if you want to override parameters from the Zabbix agent configuration file.


You can discuss this template or leave feedback on our forum https://www.zabbix.com/forum/zabbix-suggestions-and-feedback/384189-discussion-thread-for-official-zabbix-template-db-mysql



# Em caso de erro somente no Zabbix-server
* Precisar subir somente o Zabbix-server
```
docker run --name zabbix-server -p 10051:10051 --network="docker_network-zabbix" -e DB_SERVER_HOST="mysql" -e MYSQL_USER="zabbix" -e MYSQL_DATABASE="zabbix" -e MYSQL_PASSWORD="<senha_user_zabbix>" -v '/$(pwd)/zabbix/alertscripts:/usr/lib/zabbix/alertscripts' -d zabbix/zabbix-server-mysql:ubuntu-5.0.1
```
Lembrando que os itens:
- --name zabbix-server : Nome do container a ser usado (caso já estiver no compose usar o mesmo nome das dependencias)
- -p 10051:10051 : porta 
- --network="docker_network-zabbix" : nome da rede (Caso estiver já com o compose ativo usar docker networks ls para verificar)
- -e DB_SERVER_HOST="mysql" -e MYSQL_USER="zabbix" -e MYSQL_DATABASE="zabbix" -e MYSQL_PASSWORD="<senha_user_zabbix>" : parametros do banco
- -v '/$(pwd)/zabbix/alertscripts:/usr/lib/zabbix/alertscripts' : montagem de volume
- -d zabbix/zabbix-server-mysql:ubuntu-5.0.1: imagem usada pelo container
