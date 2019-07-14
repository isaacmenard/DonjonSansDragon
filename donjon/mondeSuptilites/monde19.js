if (selectMap == 19) {
    map = [
        59 ,	59 ,	59 ,	19 ,	19 ,	19 ,	19 ,	56 ,
59 ,	59 ,	61 ,	61 ,	61 ,	19 ,	56,	56 ,
59 ,	61 ,	106 ,	61 ,	61 ,	19 ,	56,	56 ,
59 ,	61 ,	106 ,	61 ,	61 ,	59 ,	56 ,	56 ,
59 ,	61 ,	106 ,	61 ,	61 ,	59 ,	56 ,	56 ,
59 ,	61 ,	61 ,	61 ,	61 ,	59 ,	56 ,	56 ,
59 ,	59 ,	61 ,	61 ,	59 ,	59 ,	56 ,	56 ,
59 ,	59 ,	59 ,	59 ,	59 ,	59 ,	59 ,	56 
    ];
    setTimeout(() => {
        deltaTimeG = 1000;
        intervalMechant = setInterval(mechant, deltaTimeG);
        addObjectJob("wood","bonbon", "img/candy.png", -100, -402, "img/candybrok.png", -3, 3,0,0,"img/candyItem.png", 50)
        mechantCreation(3, 4, 7, 16, 0, 1000, ["ananas","img/ananas.png"], 50, 1,"https://112vente.fr/wp-content/uploads/2017/11/licorne-dab.png")
    }, 100);
}