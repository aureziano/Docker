![ElasticSearch](https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch)
![ElasticSearch](https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=Kibana&logoColor=white)
# Squid_Filebeat_Elastic_Kibana_Logstash

https://www.vivaolinux.com.br/artigo/Container-Elastic-Stack-para-visualizacao-de-logs-do-Proxy-Squid?pagina=3


* Integracao Nginx com Elastic Search
  https://www.elastic.co/pt/blog/how-to-monitor-nginx-web-servers-with-the-elastic-stack

* No servidor do Elastic

 criar certificado para estar presente em todos os servidores com filebeat

```
openssl req -config /etc/ssl/openssl.cnf -x509 -days 3650 -batch -nodes -newkey rsa:2048 -keyout private/logstash-forwarder.key -out certs/logstash-forwarder.crt
```
Esses certificados deveram estar presentes na pasta /etc/pki/tls/certs/ no servidor onde estará o filebeat.

* Filebeat
  https://habr.com/ru/articles/665072/
```
curl -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-8.9.1-linux-x86_64.rpm
```

```
rpm -ivh filebeat-8.9.1-linux-x86_64.rpm
```

```
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch |  apt-key add -
```

```
echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-8.x.list
```

```
apt-get update && apt-get install filebeat
```

```
apt-get install apt-transport-https
```

```
apt-get update && apt-get install filebeat
```

```
systemctl enable filebeat
```

```
nano /etc/filebeat/filebeat.yml
```

```
filebeat modules enable system
```
* Editar os arquivos /etc/filebeat/modules.d/
```
filebeat -e test output
```

```
filebeat setup --pipelines --modules system
```

```
filebeat setup --index-management -E output.logstash.enabled=false -E 'output.elasticsearch.hosts=["<host_elastic>:9200"]'
```

```
filebeat setup -E output.logstash.enabled=false -E output.elasticsearch.hosts=['<host_elastic>:9200'] -E setup.kibana.host=<host_elastic>:5601
```

```
curl -XGET 'http://<host_elastic>:9200/filebeat-*/_search?pretty'
```
