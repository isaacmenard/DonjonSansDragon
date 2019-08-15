<?php
   include("../include.php");
   $nb_modifs = $bdd->exec('UPDATE combat SET '.$_GET['quoi'].' =  ' .$_GET['enQuoi'].' WHERE idPlayer = '.$_GET['idPlayer'] );
?>
