<?php
if (isset($_GET['map'])) // On a le slot et l'item'
{	$map = $_GET['map'];
   include("../include.php");
   
   $nb_modifs = $bdd->exec('INSERT INTO map(idClient,objetsMap,itemsMap,MechantsMap) VALUES('.$map.',"","","")' );
}
else // Il manque des param�tres, on avertit le visiteur
{
	echo 'Il faut renseigner un slot et un item !';
}
?>

