if (selectMap == 2) {
    map = [
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27
    ];
    setTimeout(() => {
        addObject("fleures", "img/flower.png", -128, -110)
        addObject("fleures", "img/flower2.png", -117, -58)
        addObject("fleures", "img/bush.png", -129, -68)
        addObject("pierre", "img/grass-prop.png", 19, 71)
        addObject("pierre", "img/rock.png", -220, 48)
        addObject("arbreBrok", "img/stump.png", -170, 67)
        addObject("pierre", "img/stones.png", -140, 60)
        addObject("pierre", "img/grass-prop.png", -150, 86)
        addObject("arbre", "img/tree.png", -203, 80)
        addObject("arbre", "img/tree2.png", -29, -309)
        addObject("arbre", "img/tree.png", -400, -78)
        addObject("arbre", "img/tree.png", -200, -266)
        addObject("arbre", "img/tree2.png", -80, 59)
        addObject("arbre", "img/tree.png", -380, 73)
<<<<<<< HEAD
        addItem("wood","img/wood.png",0,0)
=======
>>>>>>> 58f82a5c43abd9e65ba3bfdbc8945b13f43a94ea
        setTimeout(() => {
            pnjCreation(2, 2, "http://pixelartmaker.com/art/ec2897a64bc4d64.png", "pnj", ["Salut à toi, pourrais-tu m'apporter de la gelée bleu pour mon potage ?", "oui", "non", null, null, 1, 5])
        }, 100);
    }, 200);
}