if (selectMap == 11) {
    map = [
        99,	99,	83,	83,	83,	99,	99,	83,
99,	99,	83,	83,	83,	83,	83,	83,
99,	99,	83,	83,	83,	83,	83,	83,
99,	83,	83,	83,	83,	83,	83,	83,
83,	83,	83,	83,	96,	83,	83,	83,
83,	83,	83,	96,	96,	96	,83,	83,
83,	83,	100,	100,	96,	96,	83,	83,
83,	100	,100,	100	,100,	83,83	,83
    ];
    window.onload = function (){
        cercleTpCrea("1 0 1")
        pnjCreation(1, 1, "", "hidden", "Veux-tu aller dans le monde des nuages ?<p class='rep' onclick='openWin(\"monde.php?map=40\");closeWinMonde()'> oui </p><p class='rep'> non </p>")
    }
}