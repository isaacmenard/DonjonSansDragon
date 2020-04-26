<?php
mb_internal_encoding( 'UTF-8' );
setlocale( LC_CTYPE, 'fr_FR.UTF-8' );
header( 'Content-type: text/html; charset=UTF-8' );
session_start();
include( "../include.php" );
$count = 0;
$getid = intval( isset( $_GET[ 'id' ] ) );
$requser = $bdd->prepare( 'SELECT * FROM membres WHERE id = ' . $_SESSION[ 'id' ] . '' );
$requser->execute( array( $getid ) );
$userinfo = $requser->fetch();
$temps_session = 3600;
$temps_actuel = date( "U" );

$update_ip = $bdd->prepare( 'UPDATE membres SET time = ? WHERE login = ?' );
$update_ip->execute( array( $temps_actuel, $userinfo[ 'login' ] ) );
$session_delete_time = $temps_actuel - $temps_session;
$del_ip = $bdd->prepare( 'UPDATE membres SET combat = -1 WHERE time < ?' );
$del_ip->execute( array( $session_delete_time ) );
$del_ip = $bdd->prepare( 'UPDATE membres SET time = -1 WHERE time < ?' );
$del_ip->execute( array( $session_delete_time ) );
$show_user_nbr = $bdd->query( 'SELECT * FROM membres WHERE time = -1');
while ( $user_nbr = $show_user_nbr->fetch() ) {
  $del_ip = $bdd->prepare( 'DELETE FROM comabtplayers WHERE idPlayer = ' . $user_nbr[ 'id' ] );
  $del_ip->execute( array( $session_delete_time ) );
}
$show_user_nbr = $bdd->query( 'SELECT * FROM membres WHERE time != -1 AND combat = ' . $userinfo[ 'combat' ] );
while ( $user_nbr = $show_user_nbr->fetch() ) {
  if ( $count != 0 ) {
    echo( "||||" );
  }
  echo $user_nbr[ 'position' ] . "$$$$" . $user_nbr[ 'login' ] . "$$$$" . $user_nbr[ 'id' ];
  $count += 1;
}
?>