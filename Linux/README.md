# Comandos Linux úteis

## Versão do Linux e Kernel

```
uname -r
```
* Informações completas
```
uname -a
```
* Pode encontrar as informações do kernel no arquivo/proc/version
```
cat /proc/version
```
* Outra opção é o comando dmesg
```
dmesg | grep Linux
```

## Informações do sistema
* Nº de Processadores
```
grep -c processor /proc/cpuinfo
```
* Memória
```
free -h
```
* Espaço em disco
```
df -h
```

## Portas 
### Lista as portas abertas TCP/UDP
* -t para TCP
* -u para UDP
* -n para não resolver nomes
* -l para as portas abertas (listen)
```
netstat -tunl
```
* Os donos das portas
```
sudo netstat -tunlp
```
* O comando “lsof” pode ser usado neste contexto para ver os arquivos que correspondem a endereços de Internet
```
sudo lsof -i
```

