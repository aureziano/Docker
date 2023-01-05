## Instruções para configuração do Zabbix Server - Grafana

# Ambiente de treinamento docker
https://labs.play-with-docker.com/


# Instalação de Zabbix-Grafana por meio de docker compose 
https://github.com/carryontech/zabbix-docker-compose/blob/master/docker-compose.yml

# Criar pasta e aplicar o comando para execução do docker compose
docker-compose up -d


# Zabbix inicia na porta 80 e o Grafana na porta 3000

Zabbix:
	- Username: Admin
	- Password: zabbix

Grafana:
	- Username: admin
	- Senha: admin




# Integração Grafana

https://medium.com/zabbix-brasil/integrando-zabbix-e-grafana-d46de4d1526d

# Configuração Zabbix Agent 2 para Mysql
Requirements for template operation:

* Create MySQL user for monitoring. For example:

CREATE USER 'zbx_monitor'@'%' IDENTIFIED BY '<password>';
	
GRANT USAGE,REPLICATION CLIENT,PROCESS,SHOW DATABASES,SHOW VIEW ON *.* TO
'zbx_monitor'@'%';

flush privileges;
	
For more information read the MYSQL documentation https://dev.mysql.com/doc/refman/8.0/en/grant.html , please. 
	
* Set in the {$MYSQL.DSN} macro the system data source name of the MySQL instance such as <protocol(host:port or /path/to/socket)/>.
	
* Set the user name and password in host macros ({$MYSQL.USER} and {$MYSQL.PASSWORD}) if you want to override parameters from the Zabbix agent configuration file.


You can discuss this template or leave feedback on our forum https://www.zabbix.com/forum/zabbix-suggestions-and-feedback/384189-discussion-thread-for-official-zabbix-template-db-mysql
