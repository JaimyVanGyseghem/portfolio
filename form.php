<?php


// Variabelen
@$nm = addslashes($_POST['nm']);
@$email = addslashes($_POST['email']);
@$tel = addslashes($_POST['tel']);
@$msg = addslashes($_POST['msg']);

// Validatie
if (strlen($nm) <= 1)
{
die("<script type=\"text/javascript\">alert('Gelieve een achternaam in te vullen.');history.go(-1);</script>");
}

if (strlen($email) <= 1)
{
die("<script type=\"text/javascript\">alert('Gelieve een e-mailadres in te vullen.');history.go(-1);</script>");
}

if (strlen($tel) <= 1)
{
die("<script type=\"text/javascript\">alert('Gelieve een telefoonnummer in te vullen.');history.go(-1);</script>");
}

if (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email))
{
die("<script type=\"text/javascript\">alert('Gelieve een geldig email-adres in te vullen.');history.go(-1);</script>");
}

if (strlen($msg) == 0)
{
die("<script type=\"text/javascript\">alert('Gelieve een boodschap in te vullen.');history.go(-1);</script>");
}

//E-Mail
$pfw_header = "From:" .$email."\n"
. "Reply-To:".$email."\n";
$pfw_subject = "Onderwerp van de E-mail";
$pfw_email_to = "jaimy.vangyseghem@gmail.com";
// $pfw_email_to = "jaimyvangyseghem@jaimyvangyseghemb.be";
$pfw_message = "

".$pfw_subject."
Er werd u een bericht gestuurd via het contactformulier van www.jaimyblablabla.com.
De gegevens van de persoon die u een bericht stuurde via het contactformulier op uw website zijn:

Lastname:                   ".$nm."

Telefoonnummer:             ".$tel."
Email:                      ".$email."

<b>Bericht: </b>

".$msg."


";



// <<<EOT

// "Er werd u een bericht gestuurd via het contactformulier van www.jaimyblablabla.com .
// \n
// \n
// \n
// De gegevens van de persoon die u een bericht stuurde via het contactformulier op uw website zijn:\n
// \n
// {$vrnm} {$nm}\n
// {$adr} {$nr}\n
// {$post} {$gem}\n
// \n
// {$tel}\n
// {$email}\n
// \n
// \n
// {$msg}\n
// EOT;
@mail($pfw_email_to, $pfw_subject, $pfw_message, $pfw_header);

header('location: index.html');

?>