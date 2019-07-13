<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
	<link rel="SHORTCUT ICON" href="../donjon/img/logo.ico" />
    <title>Donjon et c'est tout</title>
	<div href="#personnage"></div>
	<link rel="stylesheet" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
	hello
</body>
<TABLE BORDER="1" id="tableau"> 
</table>
<form method="get" action="" name="textee" id="question">
            <label id="question4" for="test">choisis le format de ton labyrinthe</label>
            <input type="number" name="largeur" placeholder="Ex : 8" id="question1" />
			<input type="number" name="hauteur" placeholder="Ex : 8" id="question1" />
            </br>
            </br>
            <input value="essayer" id="question3" type="button" onclick="lancement();">



</form>

<?php
$nb_fichier = 0;
if($dossier = opendir('./tile'))
{
	while(false !== ($fichier = readdir($dossier)))
	{
		if($fichier != '.' && $fichier != '..' && $fichier != 'index.php')
		{
			echo('<style>.' . quotemeta($fichier) . '{background-image:url(\'tile/'.$fichier.'\')}</style>');
            echo '<div class="'.$fichier.' palette" onclick="palette=\'' . $fichier . '\'"></div>';
            $nb_fichier++; // On incr�mente le compteur de 1
        } // On ferme le if (qui permet de ne pas afficher index.php, etc.)
        
 
	} // On termine la boucle
 
	closedir($dossier);
}
?><?php
echo '<script>';
        $homepage = file_get_contents('./script.js');
        echo $homepage;
                    $nb_fichier = 0;
                    if($dossier = opendir('./tile'))
                    {
                        while(false !== ($fichier = readdir($dossier)))
                        {
                            if($fichier != '.' && $fichier != '..' && $fichier != 'index.php')
                            {
                                
                                echo 'if (palette == "'.$fichier.'") {
                                    document.getElementById(texte2.concat(this.id.split(" ")).join(" ")).innerHTML = '.($nb_fichier+1).' + document.getElementById(texte2.concat(this.id.split(" ")).join(" ")).innerHTML.split(" ").slice(1).join(" ");
                                }';
                                $nb_fichier++; // On incr�mente le compteur de 1
                            } // On ferme le if (qui permet de ne pas afficher index.php, etc.)
                            
                     
                        } // On termine la boucle
                     
                        closedir($dossier);
                    }
                    $homepage = file_get_contents('./script2.js');
                    echo $homepage;
                    $nb_fichier = 0;
                    if($dossier = opendir('./tile'))
                    {
                        while(false !== ($fichier = readdir($dossier)))
                        {
                            if($fichier != '.' && $fichier != '..' && $fichier != 'index.php')
                            {
                                
                                echo 'if (palette == "'.$fichier.'") {
                                    document.getElementById(texte2.concat(this.id.split(" ")).join(" ")).innerHTML = '.($nb_fichier+1).' + document.getElementById(texte2.concat(this.id.split(" ")).join(" ")).innerHTML
                                }';
                                $nb_fichier++; // On incr�mente le compteur de 1
                            } // On ferme le if (qui permet de ne pas afficher index.php, etc.)
                            
                     
                        } // On termine la boucle
                     
                        closedir($dossier);
                    }

                    $homepage = file_get_contents('./script3.js');
                    echo $homepage;
                    
?>
</script>
</body>
</html>