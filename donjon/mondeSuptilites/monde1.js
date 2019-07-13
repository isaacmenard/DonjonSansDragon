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
    pnjCreation(1, 1, "http://pixelartmaker.com/art/ba727526b3c3125.png", "pnj", "Hey, je suis le chevalier noir, je vais t'apprendre les bases du jeu, va à gauche et clique sur la flèche en haut à doite de ton écran")
}, 200);
}