function pnjDepartMonde1() {
    // if (selectMap == 0) {
    //     if ((a + " " + 0 + " " + b) == "1 0 1" || (a + " " + 0 + " " + b) == "0 0 1") {
    //         var compteur = 0
    //         //si il a une clef   
    //         if (chercheInv("key.png") != false) {
    //             setTimeout(() => {
    //                 window.location.replace('fin.php')
    //             }, 100);
    //             prendreInventaire(chercheInv("key.png").split(" ").slice(0, 1).join(""))
    //         } else {
    //             dialogues("il vous faut une clef pour passer")
    //         }

    //     }
    // }
}
move = false
passe = false
if (selectMap == 0) {
    map = [
        24, 24, 27, 27, 27, 24, 24, 24,
        24, 24, 27, 27, 27, 27, 24, 24,
        24, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 110, 110, 27,
        27, 27, 27, 110, 110, 110, 110, 27,
        27, 27, 27, 110, 110, 110, 110, 27,
        27, 27, 27, 27, 27, 27, 27, 27
    ];

setTimeout(() => {
    
    setTimeout(function () {
        if (move == false) {
            dialogues("Tu peux bouger avec <strong>ZQSD</strong>,<br> va voir le jeune homme au bout du chemin")
        }
    }, 5000)
    addObject("lampadaire", "img/light-post.png", -400, -400)
    addObject("maison", "img/house1.png", -280, -282)
    addObject("puit", "img/well.png", -300, -20)
    addObjectJob("wood","arbre2", "img/tree.png", -100, -350, "img/stump.png", -3, 3,5,25,"img/wood.png", 25)
    addObject("feuillage", "img/grass-prop.png", -380, 20)
    addObject("feuillage", "img/grass-prop.png", -380, 20)
    addObject("champi", "img/mushroom.png", -400, 2)
    addObject("nenuphares", "img/water-lily.png", -180, 140)
    addObject("nenuphares", "img/water-lily1.png", -180, 100)
    addObject("nenuphares", "img/water-lily1.png", -170, 110)
    addObject("fence", "img/fence2.png", -100, -20)
    pnjCreation(-2, 2, "img/road-sign2.png", "pnj", "AllowCity<br> ------>",0)
    colision = ["1 0 2", "1 0 3", "0 0 3", "0 0 2"] //penser � ajouter 1 en hauteur
    pnjCreation(4, 4, "img/pnj1.png", "pnj", ["Bernard L'air Mite : Bienvenue, jeune soldat ! pourrais tu m'aider à retrouver mes clefs ?", "oui", "non",null,null,1,1])
}, 200);
}