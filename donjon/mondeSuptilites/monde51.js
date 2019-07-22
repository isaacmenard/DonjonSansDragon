if (selectMap == 51) {
    map = [
        13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,
13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,
13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,
13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,
13,	13 ,	13 ,	13 ,	34 ,	34,	34 ,	34 ,
13 ,	13 ,	13 ,	13,	34 ,	34 ,	34 ,	34 ,
13 ,	13 ,	13 ,	13 ,	34 ,	34 ,	34 ,	34 ,
13 ,	13 ,	13 ,	13 ,	34 ,	34 ,	34 ,	34 
    ];
    setTimeout(() => {
        pnjCreation(4, 4, "img/roi.png", "pnj roi ", ["ahhhhhh quel princesse", "qui ça ?", null, null, null, 1, 10])
        document.body.style.backgroundColor = "rgb(251, 121, 121)"
        cercleTpCrea("-3 0 -3")
        pnjCreation(-3, -3, "", "hidden", "Sortir ?<p class='rep' onclick='openWin(\"monde.php?map=14\");closeWinMonde()'> oui </p><p class='rep'>non</p>")
    }, 200);
}