<?php
require_once "recaptchalib.php";

$secret = "6Lekkx8UAAAAAB0ybvP9rCjLfXCYtyuLXWLxc5-7";
$response = null;
$reCaptcha = new ReCaptcha($secret);

if ($_POST["g-recaptcha-response"]) {
$response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}
if ($response != null && $response->success) {
	$txtname = trim($_POST['fio']);
	$txtcontacts = trim($_POST['contacts']);
	$txtmessage = trim($_POST['message']);

	$fromMail = 'hasan83842@gmail.com';
	$fromName = 'Сайт';
	$emailTo = 'hasan83842@gmail.com';

	$subject = 'Форма обратной связи';
	$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
	$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
	$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

	$body = "Получено письмо с сайта\n\nИмя: $txtname \nТелефон: $txtcontacts \nСообщение: $txtmessage";
	$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
}
?>