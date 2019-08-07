if (selectMap == 14) {
    map = [
        54 ,	54 ,	54 ,	93 ,	94 ,	94 ,	94 ,	94 ,
54 ,	110 ,	54 ,	54 ,	93 ,	94 ,	94 ,	94 ,
54 ,	110 ,	54 ,	54 ,	93 ,	93,	92,	92,
54 ,	110 ,	54 ,	54 ,	54 ,	93 ,	92,	92,
54 ,	110 ,	54 ,	54 ,	54 ,	93 ,	92,	92,
54 ,	54 ,	54 ,	54 ,	54 ,	93 ,	94 ,	92,
54 ,	54 ,	54 ,	54 ,	93 ,	93 ,	94 ,	94 ,
54 ,	54 ,	54 ,	93 ,	93,	94 ,	94 ,	94 
    ];
    setTimeout(() => {
        addObject("maison", "img/chateau.png", -350, -560)
        colision = ["1 0 4","0 0 4","-1 0 4","-2 0 4"]
        pnjCreation(-1, 4, "", "hidden", "Voulez vous entrer ?<p class='rep' onclick='openWin(\"monde.php?map=51\");closeWinMonde()'> oui ? </p>",0)
    }, 200);
}