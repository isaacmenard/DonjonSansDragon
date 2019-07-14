<!DOCTYPE html>
<html>

<?php
    include("include.php");
    $requete = $bdd->query ('SELECT COUNT(id) as countid FROM membres');
    $nbligne = $requete->fetch();
?>

<head>
    <meta charset="utf-8"
        content="donjon, donjon sans dragon, donjonsansdragon, rpg, rpg mmo, mmo, rpg en ligne, rpg online, en ligne, online, game, dungeon, dragon, donjon, dragon, without, isaac, menard, discord" />
    <script src="https://kit.fontawesome.com/509db9971b.js"></script>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style.css">
    <title>Donjon Sans Dragon</title>
    <link rel="SHORTCUT ICON" href="./donjon/img/logo.ico" />
    <link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
</head>

<body>

    <body>
        <p style=heigth:0;margin:0;padding:0;font-size:0px;>Donjon sans Dragon est un rpg en ligne. Pas besoins de
            télécharger. Vous incarner un simple villagois qui finira par sauver le monde ! relèvras-tu le défi ?</p>
        <?php include("particle/particle.php"); ?>
        <div class="header">
            <div class="middle">
                <a href="index.php" class="headerLink">ACCUEIL</a>
                <a href="connexion.php" class="headerLink">JOUER</a>
                <a onclick="alert('indisponible pour le moment')" class="headerLink">WIKI</a>
                <a href="https://discord.gg/djyRs56" style="z-index:20000" target="_blank"
                    class="headerLink">DISCORD</a>
            </div>
        </div>
        <div class="accueil">
            <div class="haut">
                <img class="cercle" src="logo.png">
            </div>
            <div class="bas">
                <div class="play">
                    <p><a class="white">TOI AUSSI</a> <br><a class="black">rejoins les</a> <a
                            class="numberPlayers"><?php echo($nbligne['countid'] );?></a> <a class="black">autres
                            joueurs
                            ici :</a> <br>
                        <a href="connexion.php">JOUER</a> !<br>
                        <div class="paint">Donjon Sans Dragon</div>
                    </p>
                </div>
            </div>
            <div class="bar"></div>
        </div>
        
        <div class="topXp">
            <div class="gauche">

            </div>
            <div class="milieu">

            </div>
            <div class="droite">

            </div>
        </div>
        <div>
            <div class="discord">
                <iframe src="https://discordapp.com/widget?id=587358801523376156&theme=dark" width="100%" height="500"
                    allowtransparency="true" frameborder="0"></iframe>
            </div>
        </div>
        <div class="footer">
            <div class="footericons">
                <i class="fab fa-facebook-f"></i>
                <div class="barrefooter"></div>
                <i class="fab fa-twitter"></i>
                <div class="barrefooter2"></div>
                <i class="fab fa-instagram"></i>
            </div>
        </div>
    </body>

</html>