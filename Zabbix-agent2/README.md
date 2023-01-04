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
Server = <IP do Zabbix Server>
ServerActive= <IP do Zabbix Server>
Hostname = <IP do Zabbix Agent>
```


# Procedimento de instalação em servidor Linux

* Descobrir a versão e Kernel da versão do Linux

```
cat /etc/os-release
```



```
uname -a 

ou 

cat /proc/version
```

