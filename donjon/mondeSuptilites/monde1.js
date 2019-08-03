if (selectMap == 1) {
    map = [
        119 ,	119 ,	119 ,	119 ,	119 ,	119 ,
119 ,	119 ,	119 ,	119 ,	119 ,	119 ,
119 ,	119 ,	119 ,	119 ,	119 ,	119 ,
119 ,	119 ,	119 ,	119 ,	119 ,	119 ,
119 ,	119 ,	119 ,	119 ,	119 ,	119 ,
119 ,	119 ,	119,	119 ,	119 ,	119 
    ];

setTimeout(() => {
    
    setTimeout(function () {
        if (move == false) {
            dialogues("Tu peux bouger avec <strong>ZQSD</strong>,<br> va voir le jeune homme au bout du chemin")
        }
    }, 5000)
    addObject("crate", "img/crate.png", -210, -128)
    addObject("crate", "img/sack.png", -10, -58)
    addObject("crate", "img/sack.png", 40, -18)
    addObject("crate", "img/crate.png", -180, -128)
    addObject("crate", "img/crate.png", -150, -128)
    addObject("crate", "img/crate.png", -180, -99)
    addObject("crate", "img/barrel.png", -100, 195)
    addObject("crate", "img/crate.png", -210, -158)
    colision = ["1 0 1","1 0 3"]
    pnjCreation(1, 1, "http://pixelartmaker.com/art/ba727526b3c3125.png", "pnj", "Hey, je suis le chevalier noir, je vais t'apprendre les bases du jeu, va à gauche et clique sur la flèche en haut à droite de ton écran")
}, 200);
}