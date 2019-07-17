if (selectMap == 42) {
    map = [
        110 ,	110 ,	110 ,	110 ,	110 ,	110 ,	110 ,	110 ,
110 ,	110 ,	110 ,	55 ,	55 ,	110,	110 ,	110 ,
110 ,	110 ,	55 ,	55 ,	55 ,	55 ,	110 ,	110 ,
110 ,	55 ,	55 ,	55 ,	55 ,	55 ,	55 ,	110 ,
110 ,	55 ,	55 ,	55 ,	55 ,	55 ,	55 ,	110 ,
110 ,	110 ,	55 ,	55 ,	55 ,	55 ,	110 ,	110 ,
110 ,	110 ,	110 ,	55 ,	55 ,	110 ,	110 ,	110 ,
110 ,	110 ,	110 ,	110 ,	110 ,	110 ,	110 ,	110 
    ];
    window.onload = function () {
        deltaTimeG = 500;
        intervalMechant = setInterval(mechant, deltaTimeG);
        cercleTpCrea("3 0 3")
        pnjCreation(3, 3, "", "hidden", "<p class='rep' onclick='openWin(\"monde.php?map=43\");closeWinMonde()'> Suite ? </p>")
        mechantCreation(3, 0, 3, 3, 0, 500, ["key", "img/key.png"], 150, 1,"img/hippocamp.png")
    }
}