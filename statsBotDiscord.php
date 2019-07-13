<?php
     header('Access-Control-Allow-Origin: *'); 
     header("Access-Control-Allow-Credentials: true");
     header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
     header('Access-Control-Max-Age: 1000');
     header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
    include("include.php");
    $reponse = $bdd->query('SELECT * FROM membres WHERE login = '.$_GET['player']);
    $xp = $reponse->fetch();
    if($xp['xp'] != ""){
        echo ($xp['xp']);
    }else{
        echo null;
    }
?>