<?php
$hostname = "mysql_5_7";
$username = "phpuser";
$password = "123456";
$database = "app_php";
$port = 3306;
$row_limit = 10;
$sgbd = 'mysql'; // mysql ou pgsql
// connect to mysql
try {
    $pdo = new PDO("$sgbd:host=$hostname;port=$port;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully!";
} catch (PDOException $err) {
    die("Error! " . $err->getMessage());
}
?>