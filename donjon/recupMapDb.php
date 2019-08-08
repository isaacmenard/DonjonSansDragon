<?php
if ( isset($_GET['map']) && isset($_GET['quoi']) ) // On a le slot et l'item'
	$map = $_GET['map'];
   $quoi = $_GET['quoi'];
   include("../include.php");
   $show_user_nbr = $bdd->query('SELECT * FROM map WHERE idClient = '.$map);
   $user_nbr = $show_user_nbr->fetch();
   echo $user_nbr[$quoi]
?>
