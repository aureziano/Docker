
*** Instalação Owncloud com OnlyOffice Docs Community Edition
```
git clone --recursive https://github.com/ONLYOFFICE/docker-onlyoffice-owncloud
cd docker-onlyoffice-owncloud
```

** Substitua o conteúdo do docker-compose.yml pelo conteúdo do docker-compose.yaml desse repositório

- Vale oberservar alguns detalhes de funcionamento, como por exemplo a instalação do Onlyoffice no app-server(Owncloud), assim se necessário exexute o script manualmente ou entrando no container com:

```
docker exec -it -u 0 app-server bash 
```

Em seguida :

```
sh /run.sh
```
Esse script realiza a cópia dos arquivos a aplicação Onlyoffice e sua integração com o servidor, vale observar que nela contem alguns paramêtros usados no lado do servidor como o jwt_secret, que nesse caso tem valor de secret.
