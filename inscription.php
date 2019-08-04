
<?php
include("include.php");
include("particle/particle.php");
?>
<link rel="stylesheet" href="styles.css">
<?php
session_start();
if (isset($_SESSION['id'])) {
    header('Location: accueil.php');
    exit;
}

const MIN_PSEUDO_LEN = 3;
const MAX_PSEUDO_LEN = 80;
const MIN_PASSWORD_LEN = 6;
ini_set('display_errors','on');
error_reporting(E_ALL);
$errors = [];
mb_internal_encoding('UTF-8');
if ('POST' == $_SERVER['REQUEST_METHOD']) {


    if (array_key_exists('login', $_POST)) {
        $login_length = mb_strlen($_POST['login']);
        if ($login_length < MIN_PSEUDO_LEN || $login_length > MAX_PSEUDO_LEN) {
            $errors['login'] = sprintf("La longueur du login doit �tre comprise entre %d et %d caract�res", MIN_PSEUDO_LEN, MAX_PSEUDO_LEN);
        } else {
            $stmt = $bdd->prepare('SELECT 1 FROM membres WHERE login = :login');
            $stmt->execute(['login' => $_POST['login']]);
            if (FALSE !== $stmt->fetchColumn()) {
                $errors['login'] = "Ce pseudonyme est d�j� utilis�";
            }
        }
    } else {
        $errors['login'] = "login est absent";
    }

    if (array_key_exists('mdp', $_POST)) {
        $mdp_length = mb_strlen($_POST['mdp']);
        if ($mdp_length < MIN_PASSWORD_LEN) {
            $errors['mdp'] = sprintf("La longueur du mot de passe doit �tre d'au moins %d caract�res", MIN_PASSWORD_LEN);
        }
        if ($_POST['mdp'] != $_POST['mdpconfirm']) {
            $errors['mdpconfirm'] = "Le mot de passe et sa confirmation ne co�ncident pas";
        }
    } else {
        $errors['mdp'] = "mot de passe est absent";
    }

    if (!$errors) {
        $insert = $bdd->prepare('INSERT INTO membres(login, mot_de_passe) VALUES(:login, :mdp)');
        $insert->execute(['login' => $_POST['login'],  'mdp' => password_hash($_POST['mdp'], $password_options['algo'], $password_options['options'])]);
       $fail = FALSE;
if ('POST' == $_SERVER['REQUEST_METHOD']) {

    $stmt = $bdd->prepare('SELECT * FROM membres WHERE login = :login');
    $stmt->execute(['login' => $_POST['login']]);
    if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        if (password_verify($_POST['mdp'], $row['mot_de_passe'])) {
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
		
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
<?php
if ($errors) {
    echo '<div class="box"><span class="botton1 bottonError1">Veuillez corriger les erreurs ci-dessous afin de finaliser votre inscription :</span><span class="botton2 bottonError"><ul><li>', implode('</li><li>', $errors), '</li></ul></span></div>';
}
?>
                    <form class="form-horizontal" method="post" action="">
                            <div class="box <?php if (array_key_exists('login', $errors)) echo 'has-error'; ?>">
                                <label for="login">Pseudo :</label>
                                <span>
                                    <input type="text" id="login" name="login" value="<?php if (array_key_exists('login', $_POST)) echo htmlspecialchars($_POST['login']); ?>" />
                                </span>
                            </div>
                            <div class="box <?php if (array_key_exists('mdp', $errors) || array_key_exists('mdpconfirm', $errors)) echo 'has-error'; ?>">
                                <label for="mdp">Mot de passe :</label>
                                <span>
                                    <input type="password" id="mdp" name="mdp"  value="" />
                                </span>
                            </div>
                            <div class="box <?php if (array_key_exists('mdpconfirm', $errors)) echo 'has-error'; ?>">
                                <label for="mdpconfirm">Confirmation du mot de passe :</label>
                                <span>
                                    <input type="password" id="mdpconfirm" name="mdpconfirm" value="" />
                                </span>
                            </div>
                            <div class="box">   
                                <span class="bottonVal">                     
                                    <input type="submit" class="botton2" />
                                </span>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
