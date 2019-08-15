if (selectMap == 45) {
    map = [
        27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,
27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,
27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,
27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,
27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,
27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,
27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,
27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 ,	27 
    ];
    setTimeout(() => {
        colision=["0 0 -3","-1 0 -3","0 0 -2","-1 0 -2","0 0 4","0 0 3"]
        addObject("maison", "img/cart.png", -230, -302)
        addObject("maison", "img/stall.png", -20, -302)
        addObject("maison", "img/house2.png", -240, 20)
        addObjectJob("plant","fence", "img/flower2.png", -350, -85, "img/hidden.png", 3, 3, 0,0,"img/I_C_Radish.png", 50)
        addObjectJob("plant","fence", "img/flower2.png", -350, -145, "img/hidden.png", 3, 2, 0,0,"img/I_C_Radish.png", 50)
        var myPlans = [["W_Spear008","200px;90px;I_SilverBar","50px;90px;I_SilverBar","50px;350px;wood"],["W_Axe001","200px;90px;I_SilverBar","50px;90px;I_SilverBar","50px;350px;wood"], "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
        addObjectJob("plant","fence", "img/flower2.png", -290, -85, "img/hidden.png", 2, 3, 0,0,"img/I_C_Radish.png", 50)
        addObjectJob("plant","fence", "img/flower2.png", -290, -145, "img/hidden.png", 2, 2, 0,0,"img/I_C_Radish.png", 50)
        MiseAJourPlan( myPlans )
        pnjCreation(-3, 3, "", "hidden", "Voulez-vous fabriquer quelque chose ? <p class='rep' onclick='tableDeCraft()'>oui</p>",0)
        pnjCreation(-1, 2, "http://pixelartmaker.com/art/0d6f5d105bc469e.png", "pnj", ["Bonjour, je vais t'apprendre à utiliser casser des plantes !", "ok", null,null,null,1,12])
    }, 200);
}