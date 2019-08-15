<?php
if (isset($_GET['idPlayer'])) // On a le slot et l'item'
  $idP = $_GET['idPlayer'];
  include("../include.php");
  $show_user_nbr = $bdd->query('SELECT * FROM combat WHERE idPlayer = '.$idP);
  $user_nbr = $show_user_nbr->fetch();
  echo $user_nbr['listeJoueurs'];
?>