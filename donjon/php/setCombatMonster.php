<?php
  session_start();
$combat = null;
if(isset($_GET['combat']) == 1){
	$combat = $_SESSION['combat'];
}else{
	$combat = -1;
}
  include( "../../include.php" );
  $del_ip = $bdd->prepare('UPDATE membres SET combat = ? WHERE id = '.$_SESSION['id']);
	$del_ip->execute(array($combat));
?>
