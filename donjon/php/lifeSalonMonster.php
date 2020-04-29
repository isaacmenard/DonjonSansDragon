<?php  
  session_start();
  include( "../../include.php" );
$requser = $bdd->prepare( 'SELECT * FROM combat WHERE id = ' . $_SESSION['combat']);
  $requser->execute();
  $infoPlayer = $requser->fetch();
	echo($infoPlayer['lifeMonster']);
?>