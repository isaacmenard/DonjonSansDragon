if (selectMap == 26) {
    map = [
        11, 11, 11, 11, 11, 11,
        11, 11, 11, 11, 11, 11,
        11, 11, 11, 11, 11, 11,
        11, 11, 11, 11, 11, 11,
        11, 11, 11, 11, 91, 91,
        11, 11, 11, 91, 91, 91
    ];
    setTimeout(() => {
        deltaTimeG = 5000;
        intervalMechant = setInterval(mechant, deltaTimeG);
        mechantCreation(3, 3, 6, 1, 0, 5000, ["I_SilverBar", "img/I_SilverBar.png"], 80, 1, "img/slime_bkeu.png")
        colision = ["-2 0 1","2 0 3","2 0 2"]
        var creaTionMondeTp = setInterval(() => {
            if (mechantAm.length == mechantDead.length) {
                cercleTpCrea("3 0 -2")
                pnjCreation(3, -2, "", "hidden", "fin du tutoriel<p class='rep' onclick='openWin(\"monde.php?map=0\");closeWinMonde()'>Pour commencer l'aventure, clique ici ! </p>")
                clearInterval(creaTionMondeTp)
            }
        }, 1000);
        addObject("fence", "img/rock-fence.png", -220, -110)
        addObject("fence", "img/rock-fence.png", -220, -70)
        addObject("fence", "img/rock-fence.png", -220, -30)
        pnjCreation(-2, 1, "http://pixelartmaker.com/art/ba727526b3c3125.png", "pnj", "Attention ! voilà encore un slime bleu !<br> attaque le avant qu'il s'en prenne à nous ! ")
    }, 200);

}