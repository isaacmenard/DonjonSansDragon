<?php
session_start();
$_SESSION = array();
session_destroy();

session_start();
include("include.php");
include("particle/particle.php");
if (isset($_SESSION['id'])) {
    header('Location: index.php');
    exit;
}

$fail = FALSE;
if ('POST' == $_SERVER['REQUEST_METHOD']) {

    $stmt = $bdd->prepare('SELECT * FROM membres WHERE login = :login');
    $stmt->execute(['login' => $_POST['login']]);
    if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        if (password_verify($_POST['password'], $row['mot_de_passe'])) {
            $_SESSION['id'] = $row['id'];
            if (password_needs_rehash($row['mot_de_passe'], $password_options['algo'], $password_options['options'])) {
                $stmt = $bdd->prepare('UPDATE membres SET mot_de_passe = :new_hash WHERE id = :id');
                $stmt->execute(['id' => $row['id'], 'new_hash' => password_hash($_POST['password'], $password_options['algo'], $password_options['options'])]);
            }
            header('Location: donjon');
            echo "<script>window.location.replace('donjon');</script><p>connexion</p>";
            exit;
        } else {
            $fail = TRUE;
        }
    } else {
        $fail = TRUE;
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <?php
if ($fail) {
    echo '<div class="box"><span class="botton2  bottonError1">Aucun utilisateur ne correspond à ce couple login/mot de passe.</span></div>';
}
?>
                <form class="form-horizontal" method="POST">
                    <div class="box">
                        <label for="login">Pseudo</label>
                        <span>
                            <input type="text" id="login" name="login">
                        </span>
                    </div>
                    <div class="box">
                        <label for="password">Mot de passe</label>
                        <span>
                            <input type="password" id="password" name="password">
                        </span>
                    </div>
                    <br>
                    <div class="box">
                        <button class="botton1" type="submit">Se connecter</button>
                        <a class="botton2" href="inscription.php">
                            <div>Jouer Maintenant</div>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>