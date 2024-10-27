![Apache Spark](https://img.shields.io/badge/Apache%20Spark-FDEE21?style=flat-square&logo=apachespark&logoColor=black)
![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)

# Spark com Data Lake e Jupyter Notebook

Este projeto utiliza **Apache Spark** em conjunto com **Delta Lake** e **Jupyter Notebook** para manipulação e análise de dados em um ambiente Docker.

## Acesso ao Jupyter Notebook

- O Jupyter Notebook é aberto na porta **8888**. Para acessá-lo, você deve verificar o token exibido no console do servidor:
  
http://<ip_do_host>:8888/?token=c8de56fa...

markdown
Copiar código

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
├── start-spark.sh              # Script para iniciar o Spark
├── jars                         # Diretório que contém bibliotecas adicionais
│   └── delta-core_2.12-1.2.1.jar  # JAR do Delta Lake
├── spark-apps                   # Diretório para armazenar aplicativos Spark
└── spark-data                   # Diretório para armazenar dados
```

Descrição dos Arquivos e Diretórios
docker-compose.yaml: Define os serviços, redes e volumes para o ambiente Docker.
Dockerfile: Especifica a construção de uma imagem Docker personalizada que inclui Jupyter e PySpark.
start-spark.sh: Script utilizado para iniciar o Spark.
jars/: Diretório para armazenar os arquivos JAR necessários para a execução do Spark e do Delta Lake.
spark-apps/: Destinado a armazenar os aplicativos desenvolvidos para o Spark.
spark-data/: Usado para armazenar os dados que serão processados pelos aplicativos Spark.
Como Executar o Projeto
Construir a Imagem:

```
bash
docker-compose build
```
Iniciar os Contêineres:
```
bash
docker-compose up -d
```
Acessar Jupyter e Spark:

Jupyter Notebook: http://<ip_do_host>:8888
Spark Master: http://<ip_do_host>:9090
Spark Worker: http://<ip_do_host>:9091

