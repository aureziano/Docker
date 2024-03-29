<?php
require_once('../db_connect.php');

$id=$_GET['id'];

$sth = $pdo->prepare("SELECT id, descricao,unidade,data_cadastro from produtos WHERE id = :id");
$sth->bindValue(':id', $id, PDO::PARAM_STR);
$sth->execute();

$reg = $sth->fetch(PDO::FETCH_OBJ);
$descricao = $reg->descricao;
$unidade = $reg->unidade;
$cadastro = $reg->data_cadastro;
require_once('./header.php');
?>
<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading text-center"><h3><b><?=$title?> <br> Excluir</h3></b></div>
        <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <h3>Realmente excluir o registro abaixo?</h3>
            <br>
            <b>ID:</b> <?=$id?><br>
            <b>Descrição:</b> <?=$descricao?><br>
            <b>Unidade:</b> <?=$unidade?><br>
            <b>Cadastro:</b> <?=$cadastro?><br>
            <b>CPF:</b> <?=$cpf?><br>
            <br>
            <form method="post" action="">
            <input name="id" type="hidden" value="<?=$id?>">
            <input name="enviar" class="btn btn-danger" type="submit" value="Excluir!">&nbsp;&nbsp;&nbsp;
            <input name="enviar" class="btn btn-warning" type="button" onclick="location='index.php'" value="Voltar">
            </form>
            <br><br><br>
        <?php require_once('../footer.php'); ?>
        </div>
    <div>
</div>

<?php
if(isset($_POST['enviar'])){
$id = $_POST['id'];
    $sql = "DELETE FROM produtos WHERE id = :id";
    $sth = $pdo->prepare($sql);
    $sth->bindParam(':id', $id, PDO::PARAM_INT);   
    if( $sth->execute()){
        print "<script>alert('Registro excluído com sucesso!');location='index.php';</script>";
    }else{
        print "Erro ao exclur o registro!<br><br>";
    }
}
?>