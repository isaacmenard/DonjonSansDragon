<?php
  session_start();
  include( "../include.php" );
  $del_ip = $bdd->prepare("DELETE FROM comabtPlayers where idPlayer = ".$_SESSION['id']);
  $del_ip->execute();
  $del_ip = $bdd->prepare('UPDATE membres SET combat = -1 WHERE id = '.$_SESSION['id']);
	$del_ip->execute();
?>
