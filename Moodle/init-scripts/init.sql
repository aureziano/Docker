-- init.sql
CREATE DATABASE IF NOT EXISTS moodle;
-- Dar privilegios ao usuario moodleuser
GRANT all privileges ON moodle.* TO 'moodleuser'@'%' WITH GRANT OPTION;
ALTER USER 'moodleuser'@'%' IDENTIFIED BY '123456';
flush privileges;
