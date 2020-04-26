<?php
  session_start();
  include( "../include.php" );
  $del_ip = $bdd->prepare('UPDATE comabtPlayers SET statue = '.$_GET['statue'].' WHERE idPlayer = '.$_SESSION['id']);
  $del_ip->execute();
?>