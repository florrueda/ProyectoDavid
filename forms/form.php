<?php
$receiving_email_address = 'ventas@sistemabot.com';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$header = "";
$header .= "Content-Type: text/plain \r\n";
$header .= "From: <$email> \r\n";

$message = "Este mensaje fue enviado por: " . $name . ",\r\n";
$message .= "Su email es: " . $email . " \r\n";
$message .= "Su telefono es: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el dia: " . date('d/m/Y', time());

$to = $receiving_email_address;
$subject = 'Pedido de presupuesto desde pagina web';

mail($to, $subject, $message, $header);


?>


