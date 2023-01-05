#!/bin/bash

# Change to the script's directory & create directory
cd $(dirname "$(readlink -f "$0")")
mkdir -p ./dbdumps

# Start mysql service
docker-compose --log-level ERROR up -d mysql

# Wait
i=20
while (( i >= 1 )); do
        sleep 10
        echo -ne
        echo -ne "Wait for DB to initialize. Creating Dump in $(( i-- )) seconds ...  "'\r'
done

# Load database name + root password
source .env

# Delete old Backups
find ./dbdumps/* -atime +7 -exec rm {} \;

# Dump Table Definitions
docker-compose exec -T mysql mysqldump -u root --password=$MYSQL_ROOT_PASSWORD --no-data $MYSQL_DATABASE > ./dbdumps/`date +\%Y\%m\%d-\%H\%M`-$MYSQL_DATABASE-defs.sql

## Dump Content
docker-compose exec -T mysql /usr/bin/mysqldump -u root \
      --password=$MYSQL_ROOT_PASSWORD \
      --no-create-info \
      --ignore-table=zabbix.acknowledges \
      --ignore-table=zabbix.alerts \
      --ignore-table=zabbix.auditlog \
      --ignore-table=zabbix.auditlog_details \
      --ignore-table=zabbix.event_recovery \
      --ignore-table=zabbix.event_suppress \
      --ignore-table=zabbix.event_tag \
      --ignore-table=zabbix.events \
      --ignore-table=zabbix.history \
      --ignore-table=zabbix.history_log \
      --ignore-table=zabbix.history_str \
      --ignore-table=zabbix.history_str_sync \
      --ignore-table=zabbix.history_sync \
      --ignore-table=zabbix.history_text \
      --ignore-table=zabbix.history_uint \
      --ignore-table=zabbix.history_uint_sync \
      --ignore-table=zabbix.item_rtdata \
      --ignore-table=zabbix.problem \
      --ignore-table=zabbix.problem_tag \
      --ignore-table=zabbix.task \
      --ignore-table=zabbix.task_acknowledge \
      --ignore-table=zabbix.task_check_now \
      --ignore-table=zabbix.task_close_problem \
      --ignore-table=zabbix.task_remote_command \
      --ignore-table=zabbix.task_remote_command_result \
      --ignore-table=zabbix.trends \
      --ignore-table=zabbix.trends_uint \
      $MYSQL_DATABASE \
      | gzip --rsyncable > ./dbdumps/`date +\%Y\%m\%d-\%H\%M`-$MYSQL_DATABASE.sql.gz
