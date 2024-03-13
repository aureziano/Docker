![](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white)

# Instalação do Jenkins
https://appinventiv.com/blog/jenkins-installation-using-docker-compose/

Para altera a senha de administrador via docker
```
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```
* ver logs de instalação
```
docker logs jenkins | less
```


# Configuração
Este contêiner Docker do Jenkins utiliza os seguintes volumes:

~/jenkins:/var/jenkins_home: Volume para persistência de dados do Jenkins.
/var/run/docker.sock:/var/run/docker.sock: Volume para permitir que o Jenkins acesse o daemon Docker.
/usr/local/bin/docker:/usr/local/bin/docker: Volume para permitir que o Jenkins execute comandos Docker.
Contribuindo
Se desejar contribuir com melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

# Licença
Este projeto está licenciado sob a MIT License.
