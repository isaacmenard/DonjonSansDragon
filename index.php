<!DOCTYPE html>
<html>
<?php

    include("include.php");
    $requete = $bdd->query ('SELECT COUNT(id) as countid FROM membres');
    $nbligne = $requete->fetch();
    ini_set("default_charset", "UTF-8");
    header('Content-type: text/html; charset=UTF-8');
?>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"
    content="donjon, donjon sans dragon, donjonsansdragon, rpg, rpg mmo, mmo, rpg en ligne, rpg online, en ligne, online, game, dungeon, dragon, donjon, dragon, without, isaac, menard, discord" />
  <script src="https://kit.fontawesome.com/509db9971b.js"></script>
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
  <link rel="stylesheet" href="style.css">
  <title>Donjon Sans Dragon</title>
  <link rel="SHORTCUT ICON" href="./donjon/img/logo.ico" />
  <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
  <link rel="stylesheet" href="./style.css">
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
        <a href="https://discord.gg/djyRs56" style="z-index:20000" target="_blank" class="headerLink">DISCORD</a>
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
    </div>
    <div class="bar"></div>
    <!-- 
        <div id="cards">
            <figure class="card card--ice">
                <div class="card__image-container">
                    <img src="http://pixelartmaker.com/art/1afa6e23049fd24.png"
                        alt="Glaceon" class="card__image">
                </div>

                <figcaption class="card__caption">
                    <h1 class="card__name">Chevalier</h1>

                    <h3 class="card__type">
                        5 €
                    </h3>

                    <table class="card__stats">
                    <tbody>
            <tr>
              <th>- Son personnage dans le jeu</th>
              <td>(Sous validation)</td>
            </tr>
            <tr>
              <th>- Son nom dans les Crédits</th>
              <td></td>
            </tr>

            <tr>
              <th>- Un grade Chevalier</th>
              <td>(Utilisable en multijoueurs très bientôt)</td>
            </tr>
          </tbody>
                    </table>

                </figcaption>
            </figure>

            <figure class="card card--normal">
                <div class="card__image-container">
                    <img src="http://pixelartmaker.com/art/a310fa364575f71.png"
                        alt="Eevee" class="card__image">
                </div>

                <figcaption class="card__caption">
                    <h1 class="card__name">Mercenaire</h1>

                    <h3 class="card__type">
                        10 €
                    </h3>

                    <table class="card__stats">
                    <tbody>
            <tr>
              <th>- Sa carte dans le jeu</th>
              <td>(Sous validation)</td>
            </tr>
            <tr>
              <th>- Autant de personnages désirés sur la map</th>
              <td></td>
            </tr>
            <tr>
              <th>Son nom dans les Crédits</th>
              <td></td>
            </tr>

            <tr>
              <th>- Un grade Mercenaire</th>
              <td>(Utilisable en multijoueurs très bientôt)</td>
            </tr>
          </tbody>
                </table>

                </figcaption>
            </figure>

            <figure class="card card--psychic">
                <div class="card__image-container">
                    <img src="paladin.png"
                        alt="Espeon" class="card__image">
                </div>

                <figcaption class="card__caption">
                    <h1 class="card__name">Paladin</h1>

                    <h3 class="card__type">
                        20 €
                    </h3>

                    <table class="card__stats">
                    <tbody>
            <tr>
              <th>- Sa quête dans le jeu</th>
              <td>(Sous validation)</td>
            </tr>
            <tr>
              <th>- Autant de maps désirés</th>
              <td></td>
            </tr>
            <tr>
              <th>- Autant de personnages désirés sur les maps</th>
              <td></td>
            </tr>
            <tr>
              <th>- Son nom dans les Crédits</th>
              <td></td>
            </tr>

            <tr>
              <th>- Un grade Paladin</th>
              <td>(Utilisable en multijoueurs très bientôt)</td>
            </tr>
          </tbody>
                    </table>

                </figcaption>
            </figure>
        </div>
        <br><br><br><br>
        <div class="bar"></div> -->
    <div class="topXp">
      <div class="gauche">

      </div>
      <div class="milieu">

      </div>
      <div class="droite">

      </div>
    </div>

    <!-- <div>
            <div class="discord">
                <iframe src="https://discordapp.com/widget?id=587358801523376156&theme=dark" width="100%" height="500"
                    allowtransparency="true" frameborder="0"></iframe>
            </div>
        </div> -->
    <div class="footer">
      <div class="background">
        <div class="footericons">
          <div class="backendicons">
            <i class="fab fa-instagram"></i>
            <div class="barrefooter"></div>
            <i class="fab fa-twitter"></i>
          </div></br>
        </div>
        <br>
        <div class="part part1">
          <p class="footertitle avatars">AVATARS</p>
          <p>Bucheron</p>
          <p>Archer</p>
          <p>Et d'autres qui vont venir</p>

        </div>
        <div class="barrefootertext">
        </div>
        <div class="part part2">
          <p class="footertitle discord">DISCORD</p>
          <a class="liendiscord" href="https://discord.gg/mmT8uP8">
            <p>https://discord.gg/mmT8uP8</p>
          </a>
        </div>
        <div class="logofooter"></div>
      </div>
    </div>
    </div>
  </body>

</html>