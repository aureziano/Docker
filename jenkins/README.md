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
