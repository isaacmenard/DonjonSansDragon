<?php
if ( isset($_GET['map']) && isset($_GET['quoi']) && isset($_GET['enQuoi']) ) // On a le slot et l'item'
{	$map = $_GET['map'];
   $quoi = $_GET['quoi'];
   $enQuoi = $_GET['enQuoi'];
   include("../include.php");
   $nb_modifs = $bdd->exec('UPDATE map SET  '.$quoi.' = \' ' .$enQuoi.' \' WHERE idClient = '.$map );
}
else // Il manque des param�tres, on avertit le visiteur
{
	echo 'Il faut renseigner un slot et un item !';
}
?>
