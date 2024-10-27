from pyspark.sql import SparkSession

# Configurar Spark
spark = SparkSession.builder.appName("Database Synchronization").getOrCreate()

# Ler dados do banco de origem
source_df = spark.read \
    .format("jdbc") \
    .option("url", "jdbc:mysql://10.243.254.4:3306/promov") \
    .option("dbtable", "promov_militar") \
    .option("user", "root") \
    .option("password", "root_sci4@$*") \
    .load()

# Gravar no banco de destino
source_df.write \
    .format("jdbc") \
    .option("url", "jdbc:mysql://10.200.35.171:3306/inteligencia") \
    .option("dbtable", "promov_militar") \
    .option("user", "root") \
    .option("password", "root_sci4@$*") \
    .mode("append") \
    .save()

# Encerrar Spark
spark.stop()
