<?php
   include("../include.php");
   $show_user_nbr = $bdd->query('SELECT * FROM combat WHERE idPlayer = '.$_GET['idPlayer'] );
   $user_nbr = $show_user_nbr->fetch();
   echo $user_nbr[$_GET['quoi']]
?>
