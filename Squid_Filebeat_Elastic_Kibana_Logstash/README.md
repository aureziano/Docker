![ElasticSearch](https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch)
![ElasticSearch](https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=Kibana&logoColor=white)
# Squid_Filebeat_Elastic_Kibana_Logstash

https://www.vivaolinux.com.br/artigo/Container-Elastic-Stack-para-visualizacao-de-logs-do-Proxy-Squid?pagina=3
https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elastic-stack-on-ubuntu-20-04-pt
https://qiita.com/rhpenguin/items/7ec7ddf562906257e297

* Integracao Nginx com Elastic Search
  https://www.elastic.co/pt/blog/how-to-monitor-nginx-web-servers-with-the-elastic-stack

* No servidor do Elastic
```
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

```
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
```

```
sudo systemctl status docker
```

```
docker pull sebp/elk
```

```
sysctl vm.max_map_count
sysctl -w vm.max_map_count=262144
```

```
docker run -d -p 5601:5601 -p 9200:9200 -p 5044:5044 -it --name elk sebp/elk
```

```
docker logs -n --tail elk
```

```
cd /etc/pki/tls
mkdir /etc/pki/tls
mkdir /etc/pki/tls/private
mkdir /etc/pki/tls/certs
```

```
openssl req -x509 -batch -nodes -subj "/CN=10.200.7.142/"     -days 3650 -newkey rsa:2048     -keyout private/logstash-beats.key -out certs/logstash-beats.crt
docker exec -it elk /bin/bash
systemctl status kibana
docker exec -it elk /bin/bash
sudo -u logstash /usr/share/logstash/bin/logstash --path.settings /etc/logstash -t
logstash /usr/share/logstash/bin/logstash --path.settings /etc/logstash -t
sudo -u logstash /usr/share/logstash/bin/logstash --path.settings /etc/logstash -t
```
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
