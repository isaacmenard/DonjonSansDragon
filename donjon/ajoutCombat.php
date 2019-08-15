<?php
   $map = $_GET['map'];
   $mechants = $_GET['mechants'];
   $idP = $_GET['idPlayer'];
   $who = $_GET['qui'];
   include("../include.php");
   $errors = ["heuuu"];
   while($errors){
      $stmt = $bdd->prepare('SELECT 1 FROM combat WHERE idPlayer = :partyId');
      $stmt->execute(['partyId' => $idP]);
      if (FALSE !== $stmt->fetchColumn()){
            $show_user_nbr = $bdd->query('SELECT * FROM combat WHERE idPlayer = '.$idP);
            $user_nbr = $show_user_nbr->fetch();
            echo $user_nbr['listeJoueurs'];
            return 'stop';
        }
      else{
         $errors = [];
         $nb_modifs = $bdd->exec('INSERT INTO combat(idMap,idPlayer,listeMechants,listeJoueurs,listeJoueursPlacement) VALUES('.$map.','.$idP.',\''.$mechants.'\',"'.$who.'","'.$who.'")' );
      }
  }
   
?>

