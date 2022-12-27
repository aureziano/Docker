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
