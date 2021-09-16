<!DOCTYPE html>
<html>
<?php

    include("include.php");
    $requete = $bdd->query ('SELECT COUNT(id) as countid FROM membres');
    $nbligne = $requete->fetch();
    ini_set("default_charset", "UTF-8");
    header('Content-type: text/html; charset=UTF-8');
    echo(getenv('mdp'));
?>

<head>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- Material Design Bootstrap -->
  <link href="css/mdb.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css"
    integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossorigin="anonymous">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"
    content="donjon, donjon sans dragon, donjonsansdragon, rpg, rpg mmo, mmo, rpg en ligne, rpg online, en ligne, online, game, dungeon, dragon, donjon, dragon, without, isaac, menard, discord" />

  <title>Donjon Sans Dragon</title>
  <link rel="SHORTCUT ICON" href="./donjon/img/logo.ico" />
  <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
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
        <a href="https://discord.gg/mmT8uP8" style="z-index:20000" target="_blank" class="headerLink">DISCORD</a>
      </div>
    </div>
    <div class="accueil">
      <div class="haut">
        <img class="cercle" src="logo.png">
      </div>
      <div class="bas">
        <div class="play">
          <p><a class="whiteTitle">TOI AUSSI</a> <br><a class="blackTitle">rejoins les</a> <a
              class="numberPlayers"><?php echo($nbligne['countid'] );?></a> <a class="blackTitle">autres
              joueurs
              ici :</a> <br>
            <a href="connexion.php">JOUER</a> !<br>
            <div class="paint">Donjon Sans Dragon</div>
          </p>
        </div>
      </div>
    </div>
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
    <div class="article">
      <div class="gauche">
        <img src="mapExemple.PNG">
      </div>
      <div class="milieu">
        <h1>Donjon Sans Dragon</h1><br>
        C'est un RPG MMO <strong>FREE to PLAY</strong> où vous pouvez incarner un simple villageois qui finira par sauver le monde !
      </div>
      <div class="droite">
      <img src="slime_bkeu.png">
      </div>
    </div>
    <!-- <div class="topXp">
      <div class="gauche">

      </div>
      <div class="milieu">

      </div>
      <div class="droite">

      </div>
    </div> -->

    <!-- Footer -->
    <footer class="page-footer font-small">

      <!-- Footer Elements -->
      <div class="container">

        <!-- Grid row-->
        <div class="row">

          <!-- Grid column -->
          <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">

              <!-- Facebook -->
              <a class="fb-ic">
                <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <!-- Twitter -->
              <a class="tw-ic">
                <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <!--Instagram-->
              <a class="ins-ic">
                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <!--discord-->
              <a class="ic" href="https://discord.gg/mmT8uP8">
                <i class="fab fa fa-discord fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
            </div>
          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row-->

      </div>
      <!-- Footer Elements -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">Tout droit à
        <strong> menardisaac@gmail.com</strong>
      </div>
      <!-- Copyright -->

    </footer>
    <!-- Footer -->
  </body>

</html>
