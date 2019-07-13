<?php
	session_start();
   include("../include.php");
   $getid = intval(isset($_GET['id']));
   $requser = $bdd->prepare('SELECT * FROM membres WHERE id = '.$_SESSION['id'].'');
   $requser->execute(array($getid));
   $userinfo = $requser->fetch();
	
   $nb_modifs = $bdd->exec('UPDATE membres SET monde = \' 1 \' WHERE id = '.$userinfo['id'] );
   mb_internal_encoding('UTF-8');
	setlocale(LC_CTYPE, 'fr_FR.UTF-8');
	header('Content-type: text/html; charset=UTF-8'); 
?>


<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html"; charset=UTF-8\" >
	<link rel="SHORTCUT ICON" href="img/logo.ico" />
	<link rel="stylesheet" href="styleFin.css">
	<title>Donjon sans Dragon</title>
    <title></title>
</head>
<body>
	<div class="fondu"></div>
	
	<center>
		<a href="../accueil.php"><div class="accueil">Accueil</div></a>
		<h1 id="message">Merci d'avoir Joué !</h1>
	</center>
	<script  charset="utf-8">
		setTimeout(function(){document.getElementsByClassName("fondu")[0].style.backgroundColor = "rgb(0, 0, 0, 0)"}, 2000);
		setTimeout(function(){document.getElementsByClassName("fondu")[0].style.backgroundColor = "rgb(0, 0, 0, 1)"}, 4000);
		setTimeout(function(){document.getElementsByClassName("fondu")[0].style.backgroundColor = "rgb(0, 0, 0, 0)"; document.getElementById("message").innerHTML = "Jeu Créé et codé par Isaac MENARD"}, 6000);
		setTimeout(function(){document.getElementsByClassName("fondu")[0].style.backgroundColor = "rgb(0, 0, 0, 1)"}, 8000);
		setTimeout(function(){document.getElementsByClassName("fondu")[0].style.backgroundColor = "rgb(0, 0, 0, 0)"; document.getElementById("message").innerHTML = "Textures créés par<br>Paul OLLIER"}, 10000);
		
		setTimeout(function(){document.getElementsByClassName("fondu")[0].style.backgroundColor = "rgb(0, 0, 0, 1)"}, 12000);
		setTimeout(function(){document.getElementsByClassName("fondu")[0].style.backgroundColor = "rgb(0, 0, 0, 0)"; document.getElementById("message").innerHTML = "Donjon sans Dragon"}, 14000);
		setTimeout(function(){document.getElementsByClassName("fondu")[0].style.backgroundColor = "rgb(0, 0, 0, 1)"}, 19000);
		setTimeout(function(){document.getElementsByClassName("fondu")[0].style.backgroundColor = "rgb(0, 0, 0, 0)";document.getElementsByClassName("accueil")[0].style.visibility = "visible";document.getElementsByClassName("fondu")[0].style.height = "0px";document.getElementById("message").style.visibility = "hidden"}, 21000 );
	</script>
</body>
</html>