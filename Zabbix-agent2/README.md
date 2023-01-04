## Instruções para configurar o Agent 2

* Executar o comando de build do docker compose
```
docker-compose up -d --build
```

* Para editar o arquivo de configuração podemos entrar no container
```
docker exec -it zabbix-agent bash
```
* Entrar no arquivo de configuração pelo vi
```
vi /etc/zabbix/zabbix_agent2.conf
```
* Encontrar as seguintes linhas e editar

```
Server = <>
ServerActive= <>
Hostname = <>
```
