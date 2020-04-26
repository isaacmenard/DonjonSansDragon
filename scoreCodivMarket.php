<?php
mb_internal_encoding('UTF-8');
setlocale(LC_CTYPE, 'fr_FR.UTF-8');
header('Content-type: text/html; charset=UTF-8');
     header('Access-Control-Allow-Origin: *'); 
     header("Access-Control-Allow-Credentials: true");
     header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
     header('Access-Control-Max-Age: 1000');
     header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
    include("include.php");
	$count = 0;
    if(isset($_GET['pseudo'])&&isset($_GET['score'])){
		$insert = $bdd->prepare('INSERT INTO covidmarketscore(pseudo, score,date) VALUES(:login, :score,NOW())');
        $insert->execute(['login' => strip_tags($_GET['pseudo']),  'score' => strip_tags($_GET['score'])]);
	}
$show_user_nbr = $bdd->query('SELECT * FROM covidmarketscore ORDER BY `score` DESC');
while ($user_nbr = $show_user_nbr->fetch())
{
	if($count != 0){echo("<br>");}
 echo $user_nbr['pseudo']." est parti vers ".$user_nbr['score']." le ".$user_nbr['date'] ;
	$count+=1;
}
?>