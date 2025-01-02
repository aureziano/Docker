![Versão](https://anaconda.org/anaconda/minio/badges/version.svg)

# Minio (nó único)
MINIO_ROOT_USERe MINIO_ROOT_PASSWORDsão duas variáveis ​​de ambiente importantes no arquivo docker-compose. 
MINIO_ROOT_USER é a chave de acesso do usuário root e MINIO_ROOT_PASSWORD é a chave secreta do usuário root como suas credenciais S3. Substitua esses valores por strings longas, aleatórias e exclusivas. Observe que há dois números de porta quando você executa o servidor MinIO:

* A porta do MinIO Console tem 9001 como valor padrão.

* A porta da API , para conectar e executar operações no MinIO por meio de APIs, que defini como um número de porta estática 9000 no arquivo docker-compose.
