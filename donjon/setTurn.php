<?php

session_start();
include( "../include.php" );
$requser = $bdd->prepare( 'SELECT * FROM combat WHERE idMonster = ' . $_SESSION[ 'combat' ] . ' AND start = 0' );
$requser->execute();
$infoCombat = $requser->fetch();
if ( $infoCombat[ 'ordreTour' ] == null ) {
  $mechantTour = array($infoCombat[ 'idMonster' ]."M");
  $requser = $bdd->prepare( 'SELECT * FROM membres WHERE id = ' . $_SESSION[ 'id' ] . '' );
  $requser->execute();
  $userinfo = $requser->fetch();
  $reponse = $bdd->query( 'SELECT * FROM comabtPlayers WHERE idMonster = ' . $_SESSION[ 'combat' ] . ' AND map = ' . $userinfo[ 'monde' ] );
  // On affiche chaque entrée une à une
  while ( $donnees = $reponse->fetch() ) {
	  array_push($mechantTour, $donnees['idPlayer']);
	  shuffle($mechantTour);
	  $del_ip = $bdd->prepare('UPDATE combat SET ordreTour = ? WHERE id = ?');
	  $del_ip->execute(array(implode(",",$mechantTour),$infoCombat['id']));
	  echo(implode(",",$mechantTour));
  }
  $reponse->closeCursor(); // Termine le traitement de la requête
}else{
	echo( $infoCombat[ 'ordreTour' ] );
}