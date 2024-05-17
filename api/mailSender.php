<?php 
//Requerimentos obrigatórios do PHPMailer
require_once('src/PHPMailer.php');
require_once('src/SMTP.php');
require_once('src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Função para obter o nome do arquivo HTML que chamou o mailSender.php
function getPaginaNome() {
    // Verifica se o parâmetro 'pagina' está definido na solicitação
    if(isset($_GET['pagina'])) {
        return $_GET['pagina'];
    } else {
        return "Página não especificada";
    }
}

// Função para registrar logs
function registrarLog($mensagem) {
    $arquivoLog = 'mailSender.log';
    $dataAtual = date("Y-m-d H:i:s");
    $mensagemFormatada = "[{$dataAtual}] {$mensagem}\n";
    file_put_contents($arquivoLog, $mensagemFormatada, FILE_APPEND);
}

$assuntoEmail;
$corpoEmail;

switch($getPaginaNome){
  case $getPaginaNome == 'solucao01-02.html':
    $assuntoEmail = 'Autosolução: PDV NÃO LIGA';
    $corpoEmail = 'Loja não consegue ligar o PDV, acessou o AutoSolução para corrigir o incidente.';
    break;
}

$mail = new PHPMailer(true);

try { 
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; //Ativa ou Desativa o modo DEBUG.
    //Autenticação do e-mail.
    $mail->isSMTP(); // Uso do SMTP
    $mail->Host = 'smtp.gmail.com'; //Host do gmail, caso queira utilizar o outlook, realizar configuração e alteração do servidor SMPT aqui
    $mail->SMTPAuth = true;
    $mail->Username = 'chavepixdowagner@gmail.com'; //Conta utilizada para envio de e-mail para a conta do suporte
    $mail->Password = 'msvw jjnl fzwy kzbt'; //Senha da conta de envio cifrada
    $mail->Port = 587; //Porta padrão dos serviços google

    //Configurações de envio
    $mail->setFrom('chavepixdowagner@gmail.com');
    $mail->addAddress('suporte@gentilnegocios.com.br');

    //Configurações do corpo de e-mail
    $paginaNome = getPaginaNome();
    registrarLog("Página atual: {$paginaNome}"); // Registrar o nome da página atual no log
    $mail->isHTML(true); //Ativa ou desativa o HTML no e-mail.
    $mail->CharSet = 'UTF-8'; // Define a codificação como UTF-8
    $mail->Subject = $assuntoEmail; //Assunto do e-mail com o nome da página
    $mail->Body = $corpoEmail; //Corpo com o nome da página
    

    //Escrita na tela para testes de funcionalidade.
    if($mail->send()){
        registrarLog("E-mail enviado com sucesso");
        echo 'E-mail enviado com sucesso';
    } else {
        registrarLog("Falha no envio do e-mail");
        echo 'Falha no envio';
    }
}
catch (Exception $e){
    registrarLog("Erro ao enviar mensagem: {$e->getMessage()}");
    echo "Erro ao enviar mensagem";
}
?>
