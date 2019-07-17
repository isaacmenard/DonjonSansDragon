if (selectMap == 8) {
    map = [
        51 ,	51 ,	51 ,	51 ,	51 ,	51 ,	19,	19,
51 ,	51 ,	51 ,	50 ,	50 ,	50 ,	19,	19,
51 ,	51 ,	50 ,	50 ,	50 ,	50 ,	19,	49,
51 ,	51 ,	50 ,	50,	50,	50 ,	49,	49,
21,	50 ,	50 ,	50,	50,	50,	49 ,	49 ,
21,	21,	50 ,	50,	50 ,	49 ,	49 ,	49 ,
21,	21,	50 ,	50 ,	49 ,	49 ,	49 ,	49 ,
21,	50 ,	50 ,	49,	49,	49 ,	49 ,	49 
    ];
    window.onload = function() {
        ocean()
        colision = ["3 0 4","3 0 3","1 0 1"]
        addObject("barbapapa", "img/barbapapa.png", -180, 140)
        addObject("barbapapa", "img/barbapapa.png", -140, 140)
        addObject("barbapapa", "img/barbapapa.png", -180, 180)
        addObject("barbapapa", "img/barbapapa.png", -140, 180)
        addObject("fence", "img/fence2.png", -170, 220)
        addObject("fence", "img/fence2.png", -110, 220)
        addObject("fence", "img/fence1.png", -80, 180)
        addObject("fence", "img/fence1.png", -80, 130)
        addObject("maisonCandy", "https://japari-library.com/w/images/9/95/ToyCandy_House.png", -460, -330)
        pnjCreation(1, 1, "http://ekladata.com/Zp93ejrQhiABnEaO8SBOn5AJeQM.gif", "pnj bigPnj", ["Hey, je vais bientôt aller voir mon ami gandoulf aux 4 sens pour goûter sa gelée bleu ^^ <br> pourrais-tu m'aider à trouver le dessert ?", "Pourquoi pas ^^", "ouiiii", null, null, 1, 6])
    }
}  