<?php
include_once("../db_connect.php");
include_once("../functions.php");

try {
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM clientes");
    $stmt->execute();
    $rows = $stmt->fetch();

    // get total no. of pages
    $total_pages = ceil($rows[0] / $row_limit);
} catch (PDOException $e) {
    echo "Erro na consulta: " . $e->getMessage();
    // Adicione tratamento de erro adicional, se necessário
}
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <title><?= $titleMenu ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/style.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        .panel-footer {
            padding: 0;
            background: none;
        }
    </style>
</head>
<body>
    <!-- O restante do seu conteúdo HTML continua aqui -->
</body>
</html>