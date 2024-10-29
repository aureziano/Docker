![Apache Spark](https://img.shields.io/badge/Apache%20Spark-FDEE21?style=flat-square&logo=apachespark&logoColor=black)
![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)

# Spark com Data Lake e Jupyter Notebook

Este projeto utiliza **Apache Spark** em conjunto com **Delta Lake** e **Jupyter Notebook** para manipulação e análise de dados em um ambiente Docker.

Link de apoio :
[https://karlchris.github.io/data-engineering/projects/spark-docker/](https://github.com/leonardoleanodev/pyspark_example/blob/main/README.md)

## Acesso ao Jupyter Notebook

- O Jupyter Notebook é aberto na porta **8888**. Para acessá-lo, você deve verificar o token exibido no console do servidor:
  
http://<ip_do_host>:8888/?token=c8de56fa...


- Após abrir o Jupyter Notebook, instale o **PySpark** executando o seguinte comando:

```bash
pip install pyspark
```
Acesso ao Servidor Spark
O servidor Spark Master pode ser acessado na porta 9090.
O Spark Worker pode ser acessado na porta 9091.
Estrutura de Diretórios
A estrutura de diretórios do projeto é a seguinte:
```
.
├── docker-compose.yaml          # Arquivo de configuração do Docker Compose
├── Dockerfile                   # Dockerfile para criar uma imagem personalizada do Jupyter com PySpark
├── requirements.txt             # Requisitos
├── Makefile
├── conf                    
│   └── spark-defaults.conf  
├── tmp
└── spark-events
  └── spark-events
└── app         
```

Descrição dos Arquivos e Diretórios
docker-compose.yaml: Define os serviços, redes e volumes para o ambiente Docker.
Dockerfile: Especifica a construção de uma imagem Docker personalizada que inclui Jupyter e PySpark.
app: Destinado a armazenar os aplicativos desenvolvidos para o Spark.
Como Executar o Projeto
Construir a Imagem:

```bash
docker-compose build
```
Iniciar os Contêineres:
```bash
docker-compose up -d
```
Acessar Jupyter e Spark:

* Jupyter Notebook: http://<ip_do_host>:8888
* Spark Master: http://<ip_do_host>:9090
* Spark Worker: http://<ip_do_host>:9091
* Spark History: http://<ip_do_host>:18080

