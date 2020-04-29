<?php
if ( isset( $_GET[ 'id' ] ) && isset( $_GET[ 'statue' ] ) ) // On a le slot et l'item'
{
  $item = $_GET[ 'id' ];
  $map = 0;
  $_SESSION[ 'map' ] = $map;
  $notReady = false;
  session_start();
  include( "../../include.php" );
  $getid = intval( isset( $_GET[ 'id' ] ) );
  $requser = $bdd->prepare( 'SELECT * FROM combat WHERE idMonster = ' . $_GET[ 'id' ] . ' AND start = 0' );
  $requser->execute( array( $getid ) );
  $infoCombat = $requser->fetch();
  if ( $infoCombat == null ) {
    if ( isset( $_GET[ 'life' ] ) ) {
      $requser = $bdd->prepare( 'INSERT INTO  combat(idMonster,map,lifeMonster) VALUES(:idMonster,:map,:vie)' );

      $requser->execute( [ 'idMonster' => $_GET[ 'id' ], 'map' => $map, 'vie' => $_GET[ 'life' ] ] );
      $_SESSION[ 'combat' ] = $requser->insert_id;
    }
  } else {
    $_SESSION[ 'combat' ] = $infoCombat[ 'id' ];
  }
  $requser = $bdd->prepare( 'SELECT * FROM comabtPlayers WHERE idMonster = ' . $_GET[ 'id' ] . ' AND map = ' . $map . ' AND idPlayer = ' . $_SESSION[ 'id' ] );
  $requser->execute( array( $getid ) );
  $infoPlayer = $requser->fetch();
  if ( $infoPlayer == null ) {
    $requser = $bdd->prepare( 'INSERT INTO  comabtPlayers(idMonster,map,idPlayer,statue) VALUES(:idMonster,:map,:idPlayer,0)' );
    $requser->execute( [ 'idMonster' => $_GET[ 'id' ], 'map' => $map, 'idPlayer' => $_SESSION[ 'id' ] ] );
  }
  $reponse = $bdd->query( 'SELECT * FROM comabtPlayers WHERE idMonster = ' . $_GET[ 'id' ] . ' AND map = ' . $map );

  // On affiche chaque entrée une à une
  while ( $donnees = $reponse->fetch() ) {
    $reponse2 = $bdd->query( 'SELECT * FROM membres WHERE id = ' . $donnees[ 'idPlayer' ] );

    // On affiche chaque entrée une à une
    while ( $donnees2 = $reponse2->fetch() ) {
      ?>
<p><?php echo ( $donnees2[ 'login' ] );

if ( $donnees[ 'statue' ] == 1 ) {
  echo( " -- ready !" );
} else {
  echo( " -- en attente !" );
  $notReady = true;
}
?> </p>
<br>
<?php
}
$reponse2->closeCursor(); // Termine le traitement de la requête
}
$reponse->closeCursor(); // Termine le traitement de la requête
if ( $notReady == false ) {
  ?>
<p id="canGo" style="visibility: hidden"></p>
<?php
}
}
?>
