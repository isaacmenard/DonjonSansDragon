<?php
header('Content-Type: text/html; charset=ISO-8859-1'); // �crase l'ent�te utf-8 envoy� par php
	ini_set( 'default_charset', 'ISO-8859-1' );

# param�tres pour le hachage des mots de passe
$password_options = [ 'algo' => PASSWORD_DEFAULT, 'options' => [ 'cost' => 12 ] ];

# la connexion � la base de donn�es

try
{
$bdd = new PDO('mysql:host=localhost;dbname=test', 'root', '');
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
?>