<?php
  session_start();
  include( "../include.php" );
  $del_ip = $bdd->prepare('UPDATE combat SET start = 1 WHERE id = '.$_SESSION['combat']);
  $del_ip->execute();
$del_ip = $bdd->prepare('UPDATE membres SET combat = -1 WHERE  id = '.$_SESSION['id']);
$del_ip->execute();
  $_SESSION['combat'] = -1;
?>
