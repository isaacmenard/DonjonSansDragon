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
        mechantCreation(3, 3, 6, 1, 0, 5000, ["I_SilverBar","img/I_SilverBar.png"], 100, 1,"img/slime_bkeu.png")
        colision = ["-2 0 1"]
        pnjCreation(-2, 1, "http://pixelartmaker.com/art/ba727526b3c3125.png", "pnj", "Attention ! voilà encore un slime bleu !<br> attaque le avant qu'il s'en prenne à nous ! ")
    }, 200);

}