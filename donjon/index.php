<?php
mb_internal_encoding( 'UTF-8' );
setlocale( LC_CTYPE, 'fr_FR.UTF-8' );
header( 'Content-type: text/html; charset=UTF-8' );


session_start();

include( "../include.php" );

if ( isset( $_SESSION[ 'id' ] ) ) {
  $requser = $bdd->prepare( "SELECT * FROM membres WHERE id = ?" );
  $requser->execute( array( $_SESSION[ 'id' ] ) );
  $user = $requser->fetch();
} else {
  header( 'Location: ../connexion.php' );
}
$getid = intval( isset( $_GET[ 'id' ] ) );
$requser = $bdd->prepare( 'SELECT * FROM membres WHERE id = ' . $_SESSION[ 'id' ] . '' );
$requser->execute( array( $getid ) );
$userinfo = $requser->fetch();
?>

<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html" ; charset="UTF-8"\>
<script>
		listePlayerPos = []
        stats = null;
        colision = [];
        antiColision = []
		idPErso = <?php echo($_SESSION['id']); ?>
    </script> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="SHORTCUT ICON" href="img/logo.ico" />
<script type="text/javascript" src="js/pathfinding-browser.js"></script>
<link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet">
<script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<?php
?>
<title>Donjon sans Dragon</title>
<div href="#personnage"></div>

<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/inventory.scss">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head><?php
$temps_session = 3600;
$temps_actuel = date( "U" );
if ( $userinfo[ 'time' ] - $temps_actuel < $temps_session * -1 && $userinfo[ 'combat' ] != -1 ) {
  $del_ip = $bdd->prepare( 'DELETE FROM comabtPlayers WHERE idPlayer = ' . $_SESSION[ 'id' ] );
  $del_ip->execute();
  $del_ip = $bdd->prepare( 'UPDATE membres SET combat = -1 WHERE  id = ' . $_SESSION[ 'id' ] );
  $del_ip->execute();
  $_SESSION[ 'combat' ] = -1;
  echo( "<script>combat = -1;posActuY = (" . $userinfo[ 'position' ] . ").split(' ')[2]
			posActuX = (" . $userinfo[ 'position' ] . ").split(' ')[0]


</script>" );
} else {
  echo( "<script>combat = " . $userinfo[ 'combat' ] . ";posActuY = (" . $userinfo[ 'position' ] . ").split(' ')[2]
posActuX = (" . $userinfo[ 'position' ] . ").split(' ')[0]


</script>" );
}
$monde = 0;

$update_ip = $bdd->prepare( 'UPDATE membres SET time = ? WHERE id = ?' );
$update_ip->execute( array( $temps_actuel, $userinfo[ 'id' ] ) );
$session_delete_time = $temps_actuel - $temps_session;
$del_ip = $bdd->prepare( 'UPDATE membres SET time = -1 WHERE time < ?' );
$del_ip->execute( array( $session_delete_time ) );
$show_user_nbr = $bdd->query( 'SELECT * FROM membres WHERE time != "-1"' );
while ( $user_nbr = $show_user_nbr->fetch() ) {
  ?>
<script>
	 listePlayerPos.push([<?php echo $user_nbr['position'] ?>,'<?php echo $user_nbr['login'] ?>'])
</script>
<?php
}

?>

<body>
<div id="coin"></div>
<p id="textAjax"></p>
<table  class="table">
  <tbody   id="map" class="tbody">
  </tbody>
</table>
<div id="lifeMonster" style="visibility: hidden"></div>
<div id="salon" style="visibility: hidden;">
  <div id="salonText" ></div>
  <div class="bottom">
    <p id="textPanelSalon"></p>
    <a href="#" id="ready" class="btn green" onClick="ready()">I'm READY !</a> <a href="#" class="btn red"  onClick="leave()">LEAVE !</a> </div>
</div>
<div class="tile hide">
  <div></div>
</div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<div id="map"> </div>
<div id="inventory">
  <table>
    <tr>
      <td id="drag1" ondrop="drop(event)" ondragover="allowDrop(event,this)"><div id="enlt1" ondragstart="drag(event)" style="width: 100%;height: 100%" draggable="true">a</div></td>
      <td id="drag2" ondrop="drop(event)" ondragover="allowDrop(event,this)"><div id="enlt2" ondragstart="drag(event)" style="width: 100%;height: 100%" draggable="true">b</div></td>
      <td id="drag3" ondrop="drop(event)" ondragover="allowDrop(event,this)"><div id="enlt3" ondragstart="drag(event)" style="width: 100%;height: 100%" draggable="true">c</div></td>
    </tr>
    <tr>
      <td id="drag4" ondrop="drop(event)" ondragover="allowDrop(event,this)"><div id="enlt4" ondragstart="drag(event)" style="width: 100%;height: 100%" draggable="true">d</div></td>
      <td id="drag5" ondrop="drop(event)" ondragover="allowDrop(event,this)"><div id="enlt5" ondragstart="drag(event)" style="width: 100%;height: 100%" draggable="true">e</div></td>
      <td id="drag6" ondrop="drop(event)" ondragover="allowDrop(event,this)"><div id="enlt6" ondragstart="drag(event)" style="width: 100%;height: 100%" draggable="true">f</div></td>
    </tr>
    <tr>
      <td id="drag7" ondrop="drop(event)" ondragover="allowDrop(event,this)"><div id="enlt7" ondragstart="drag(event)" style="width: 100%;height: 100%" draggable="true">f</div></td>
      <td id="drag8" ondrop="drop(event)" ondragover="allowDrop(event,this)"><div id="enlt8" ondragstart="drag(event)" style="width: 100%;height: 100%" draggable="true">g</div></td>
      <td id="drag9" ondrop="drop(event)" ondragover="allowDrop(event,this)"><div id="enlt9" ondragstart="drag(event)" style="width: 100%;height: 100%" draggable="true">h</div></td>
    </tr>
  </table>
</div>
<div class="personnage" id="personnage">
  <div class="pseudo" style="color:white">YOU</div>
  <img src="img/srill_face.png" class="perso" /> </div>
<script src="js/monster.js" charset="utf-8" data-turbolinks-track="reload"></script>
<?php

$nb_fichier = 0;
if ( $dossier = opendir( './mondeSuptilites' ) ) {
  while ( false !== ( $fichier = readdir( $dossier ) ) ) {
    if ( $fichier != '.' && $fichier != '..' && $fichier != 'index.php' ) {
      $nb_fichier++; // On incr�mente le compteur de 1
      echo '<script src="./mondeSuptilites/' . $fichier . ' " charset="utf-8">';
      echo '</script>';
    } // On ferme le if (qui permet de ne pas afficher index.php, etc.)

  } // On termine la boucle

  closedir( $dossier );
}
?>
<script>selectMap = 0</script> 
<script src="js/variables.js" charset="utf-8" data-turbolinks-track="reload"></script> 
<script src="js/inventaire.js" charset="utf-8" data-turbolinks-track="reload"></script> 
<script src="js/script.js" charset="utf-8" data-turbolinks-track="reload"></script> 
<script src="js/mapcrea.js" charset="utf-8" data-turbolinks-track="reload"></script>
<style>
        .tile>div.tile-0 {
            background-image: url("img/tile/aaaa.png");
        }

        .tile>div.tile-1 {
            background-image: url("img/tile/Amber.png");
        }

        .tile>div.tile-2 {
            background-image: url("img/tile/Amber_With_bug.png");
        }

        .tile>div.tile-3 {
            background-image: url("img/tile/blackStone.png");
        }

        .tile>div.tile-4 {
            background-image: url("img/tile/Blood.png");
        }

        .tile>div.tile-5 {
            background-image: url("img/tile/Blood_80_opacity.png");
        }

        .tile>div.tile-6 {
            background-image: url("img/tile/Blood_spots.png");
        }

        .tile>div.tile-7 {
            background-image: url("img/tile/Blood_Top.png");
        }

        .tile>div.tile-8 {
            background-image: url("img/tile/Blood_Top_80_opacity.png");
        }

        .tile>div.tile-9 {
            background-image: url("img/tile/Bones.png");
        }

        .tile>div.tile-10 {
            background-image: url("img/tile/Brains.png");
        }

        .tile>div.tile-11 {
            background-image: url("img/tile/Bricks.png");
        }

        .tile>div.tile-12 {
            background-image: url("img/tile/Brick_01.png");
        }

        .tile>div.tile-13 {
            background-image: url("img/tile/Brick_Desert.png");
        }

        .tile>div.tile-14 {
            background-image: url("img/tile/Brick_Ice.png");
        }

        .tile>div.tile-15 {
            background-image: url("img/tile/Brick_Lava.png");
        }

        .tile>div.tile-16 {
            background-image: url("img/tile/Brick_Orange.png");
        }

        .tile>div.tile-17 {
            background-image: url("img/tile/Brick_White.png");
        }

        .tile>div.tile-18 {
            background-image: url("img/tile/Bronze.png");
        }

        .tile>div.tile-19 {
            background-image: url("img/tile/Chocolate_01.png");
        }

        .tile>div.tile-20 {
            background-image: url("img/tile/Chocolate_02.png");
        }

        .tile>div.tile-21 {
            background-image: url("img/tile/Chocolate_03.png");
        }

        .tile>div.tile-22 {
            background-image: url("img/tile/darkStone.png");
        }

        .tile>div.tile-23 {
            background-image: url("img/tile/Dark_Stone.png");
        }

        .tile>div.tile-24 {
            background-image: url("img/tile/Dirt_01.png");
        }

        .tile>div.tile-25 {
            background-image: url("img/tile/Dirt_02.png");
        }

        .tile>div.tile-26 {
            background-image: url("img/tile/Dirt_03.png");
        }

        .tile>div.tile-27 {
            background-image: url("img/tile/Dirt_Grass.png");
        }

        .tile>div.tile-28 {
            background-image: url("img/tile/Dirt_Small_Grass.png");
        }

        .tile>div.tile-29 {
            background-image: url("img/tile/Eye_Blue.png");
        }

        .tile>div.tile-30 {
            background-image: url("img/tile/Eye_Green.png");
        }

        .tile>div.tile-31 {
            background-image: url("img/tile/Eye_Red.png");
        }

        .tile>div.tile-32 {
            background-image: url("img/tile/Eye_Yellow.png");
        }

        .tile>div.tile-33 {
            background-image: url("img/tile/Fluffy_Striped.png");
        }

        .tile>div.tile-34 {
            background-image: url("img/tile/Fluffy_Tiger.png");
        }

        .tile>div.tile-35 {
            background-image: url("img/tile/Fluffy_White.png");
        }

        .tile>div.tile-36 {
            background-image: url("img/tile/Glass_Blue.png");
        }

        .tile>div.tile-37 {
            background-image: url("img/tile/Glass_Blue_80_opacity.png");
        }

        .tile>div.tile-38 {
            background-image: url("img/tile/Glass_Desert.png");
        }

        .tile>div.tile-39 {
            background-image: url("img/tile/Glass_Grey.png");
        }

        .tile>div.tile-40 {
            background-image: url("img/tile/Glass_Grey_80_opacity.png");
        }

        .tile>div.tile-41 {
            background-image: url("img/tile/Gold.png");
        }

        .tile>div.tile-42 {
            background-image: url("img/tile/Grass.png");
        }

        .tile>div.tile-43 {
            background-image: url("img/tile/GrassSmall.png");
        }

        .tile>div.tile-44 {
            background-image: url("img/tile/Heart.png");
        }

        .tile>div.tile-45 {
            background-image: url("img/tile/Hole.png");
        }

        .tile>div.tile-46 {
            background-image: url("img/tile/Hole_Cube.png");
        }

        .tile>div.tile-47 {
            background-image: url("img/tile/Hot_Metal.png");
        }

        .tile>div.tile-48 {
            background-image: url("img/tile/Ice_Bricks.png");
        }

        .tile>div.tile-49 {
            background-image: url("img/tile/Ice_Cream_01.png");
        }

        .tile>div.tile-50 {
            background-image: url("img/tile/Ice_Cream_02.png");
        }

        .tile>div.tile-51 {
            background-image: url("img/tile/Ice_Cream_03.png");
        }

        .tile>div.tile-52 {
            background-image: url("img/tile/Ice_Cube.png");
        }

        .tile>div.tile-53 {
            background-image: url("img/tile/Ice_Cube_80_opacity.png");
        }

        .tile>div.tile-54 {
            background-image: url("img/tile/Ice_Stones_01.png");
        }

        .tile>div.tile-55 {
            background-image: url("img/tile/Ice_Stones_02.png");
        }

        .tile>div.tile-56 {
            background-image: url("img/tile/Jelly_01.png");
        }

        .tile>div.tile-57 {
            background-image: url("img/tile/Jelly_02.png");
        }

        .tile>div.tile-58 {
            background-image: url("img/tile/Jelly_03.png");
        }

        .tile>div.tile-59 {
            background-image: url("img/tile/Jelly_04.png");
        }

        .tile>div.tile-60 {
            background-image: url("img/tile/Jelly_05.png");
        }

        .tile>div.tile-61 {
            background-image: url("img/tile/Jelly_06.png");
        }

        .tile>div.tile-62 {
            background-image: url("img/tile/Lava_Rocks.png");
        }

        .tile>div.tile-63 {
            background-image: url("img/tile/Lava_stones.png");
        }

        .tile>div.tile-64 {
            background-image: url("img/tile/Lava_stones_02.png");
        }

        .tile>div.tile-65 {
            background-image: url("img/tile/Log.png");
        }

        .tile>div.tile-66 {
            background-image: url("img/tile/Log_Birtch.png");
        }

        .tile>div.tile-67 {
            background-image: url("img/tile/Log_Desert.png");
        }

        .tile>div.tile-68 {
            background-image: url("img/tile/Log_Lime.png");
        }

        .tile>div.tile-69 {
            background-image: url("img/tile/Log_Oak.png");
        }

        .tile>div.tile-70 {
            background-image: url("img/tile/Magma.png");
        }

        .tile>div.tile-71 {
            background-image: url("img/tile/Magma_Dark.png");
        }

        .tile>div.tile-72 {
            background-image: url("img/tile/Magma_with_Stones.png");
        }

        .tile>div.tile-73 {
            background-image: url("img/tile/Meat_01.png");
        }

        .tile>div.tile-74 {
            background-image: url("img/tile/Meat_02.png");
        }

        .tile>div.tile-75 {
            background-image: url("img/tile/Meat_03.png");
        }

        .tile>div.tile-76 {
            background-image: url("img/tile/Meat_04.png");
        }

        .tile>div.tile-77 {
            background-image: url("img/tile/Metal.png");
        }

        .tile>div.tile-78 {
            background-image: url("img/tile/Metal_Sci-Fi.png");
        }

        .tile>div.tile-79 {
            background-image: url("img/tile/Milk.png");
        }

        .tile>div.tile-80 {
            background-image: url("img/tile/Milk_90_opacity.png");
        }

        .tile>div.tile-81 {
            background-image: url("img/tile/Milk_Top.png");
        }

        .tile>div.tile-82 {
            background-image: url("img/tile/Milk_Top_90_opacity.png");
        }

        .tile>div.tile-83 {
            background-image: url("img/tile/Rocks.png");
        }

        .tile>div.tile-84 {
            background-image: url("img/tile/Rocks_Desert.png");
        }

        .tile>div.tile-85 {
            background-image: url("img/tile/Sand_01.png");
        }

        .tile>div.tile-86 {
            background-image: url("img/tile/Sand_02.png");
        }

        .tile>div.tile-87 {
            background-image: url("img/tile/Sand_03.png");
        }

        .tile>div.tile-88 {
            background-image: url("img/tile/Separate_Lava_Stones.png");
        }

        .tile>div.tile-89 {
            background-image: url("img/tile/Separate_Stones.png");
        }

        .tile>div.tile-90 {
            background-image: url("img/tile/Silver.png");
        }

        .tile>div.tile-91 {
            background-image: url("img/tile/Small_Bricks_Desert.png");
        }

        .tile>div.tile-92 {
            background-image: url("img/tile/Snow.png");
        }

        .tile>div.tile-93 {
            background-image: url("img/tile/Snowy_Ice.png");
        }

        .tile>div.tile-94 {
            background-image: url("img/tile/Snowy_Ice_80_opacity.png");
        }

        .tile>div.tile-95 {
            background-image: url("img/tile/Sones_Two_Colors.png");
        }

        .tile>div.tile-96 {
            background-image: url("img/tile/Sones_Two_Colors_01.png");
        }

        .tile>div.tile-97 {
            background-image: url("img/tile/Stairs_01.png");
        }

        .tile>div.tile-98 {
            background-image: url("img/tile/Stairs_02.png");
        }

        .tile>div.tile-99 {
            background-image: url("img/tile/Stones_Desert.png");
        }

        .tile>div.tile-100 {
            background-image: url("img/tile/Stones_Desert_01.png");
        }

        .tile>div.tile-101 {
            background-image: url("img/tile/Stone_01.png");
        }

        .tile>div.tile-102 {
            background-image: url("img/tile/Stone_02.png");
        }

        .tile>div.tile-103 {
            background-image: url("img/tile/Stone_with_Lava.png");
        }

        .tile>div.tile-104 {
            background-image: url("img/tile/Stone_with_more_Lava.png");
        }

        .tile>div.tile-105 {
            background-image: url("img/tile/Toxic_Water.png");
        }

        .tile>div.tile-106 {
            background-image: url("img/tile/Toxic_Water_80_opacity.png");
        }

        .tile>div.tile-107 {
            background-image: url("img/tile/Toxic_Water_Top.png");
        }

        .tile>div.tile-108 {
            background-image: url("img/tile/Toxic_Water_Top_80_opacity.png");
        }

        .tile>div.tile-109 {
            background-image: url("img/tile/Water.png");
        }

        .tile>div.tile-110 {
            background-image: url("img/tile/Water_80_opacity.png");
        }

        .tile>div.tile-111 {
            background-image: url("img/tile/Water_Top.png");
        }

        .tile>div.tile-112 {
            background-image: url("img/tile/Water_Top_80_opacity.png");
        }

        .tile>div.tile-113 {
            background-image: url("img/tile/Wooden_Bridge_01.png");
        }

        .tile>div.tile-114 {
            background-image: url("img/tile/Wooden_Bridge_02.png");
        }

        .tile>div.tile-115 {
            background-image: url("img/tile/Wooden_Bridge_03.png");
        }

        .tile>div.tile-116 {
            background-image: url("img/tile/Wooden_Bridge_04.png");
        }

        .tile>div.tile-117 {
            background-image: url("img/tile/Wood_01.png");
        }

        .tile>div.tile-118 {
            background-image: url("img/tile/Wood_02.png");
        }

        .tile>div.tile-119 {
            background-image: url("img/tile/Wood_03.png");
        }

        .tile>div.tile-120 {
            background-image: url("img/tile/Wood_04.png");
        }

        .tile>div.tile-121 {
            background-image: url("img/tile/Wood_05.png");
        }
    </style>
</body>
</html>