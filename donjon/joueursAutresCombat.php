<?php
mb_internal_encoding('UTF-8');
setlocale(LC_CTYPE, 'fr_FR.UTF-8');
header('Content-type: text/html; charset=UTF-8'); 
	session_start();
include("../include.php");

$getid = intval(isset($_GET['id']));
$requser = $bdd->prepare('SELECT * FROM membres WHERE id = '.$_SESSION['id'].'');
$requser->execute(array($getid));
$userinfo = $requser->fetch();
  $temps_session = 3600;
  $temps_actuel = date("U");

$session_delete_time = $temps_actuel - $temps_session;
$del_ip = $bdd->prepare('UPDATE membres SET time = -1 WHERE time < ?');
$del_ip->execute(array($session_delete_time));
$show_user_nbr = $bdd->query('SELECT * FROM membres WHERE combat = '.$_GET['idPlayer']);
    while ($user_nbr = $show_user_nbr->fetch())
    if($user_nbr['login'] != $userinfo['login']){
    {
 echo $user_nbr['position']."$$$$" ;
 echo $user_nbr['login']."$$$$"; }
} 
 ?>