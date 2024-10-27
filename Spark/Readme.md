![Apache Spark](https://img.shields.io/badge/Apache%20Spark-FDEE21?style=flat-square&logo=apachespark&logoColor=black)
![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)

# Spark com Data Lake e Jupyter Notebook

- O Jupyter Notebook é aberto na porta 8888, porem deve se ver no servidor o token para acesso:
http://<ip_do_host>:8888/?token=c8de56fa...
- Ao abrir o jupyter instalar o pyspark

```
pip install pyspark
```

- O servidor Spark pode ser acessado pela porta 9090 e seu work 9091 nesse caso

* A estrutura de pastas fica assim:

 
├── docker-compose.yaml # Arquivo de configuração do Docker Compose 

├── Dockerfile # Dockerfile para criar uma imagem personalizada do Jupyter com PySpark 

├── start-spark.sh # Script para iniciar o Spark

├── jars # Diretório que contém bibliotecas adicionais

│ └── delta-core_2.12-1.2.1.jar # JAR do Delta Lake 

├── spark-apps # Diretório para armazenar aplicativos Spark 

├── spark-data # Diretório para armazenar dados
