if (selectMap == 48) {
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
        colision=["1 0 4","0 0 4","-1 0 4","1 0 3","0 0 3","-1 0 3","1 0 2","0 0 2","-1 0 2",]
        addObject("house", "img/house5.png", -300, -302)
        addObject("pierre", "img/rock.png", -220, 48)
        addObject("arbreBrok", "img/stump.png", -170, 67)
        addObject("pierre", "img/stones.png", -140, 60)
        addObject("pierre", "img/grass-prop.png", -150, 86)
        addObject("arbre", "img/tree.png", -203, 80)
        listeAchat = [[8, "wood"],[8, "I_SilverBar"],"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
        listeVente = [[6, "wood"],[6, "I_SilverBar"],[5, "S_Water01"], "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
        MiseAJourShop("achat")
        pnjCreation(-2, 1, "http://pixelartmaker.com/art/59bfaa5b235471e.png", "pnj", "Veux-Tu m'acheter des materiaux ?<p class='rep' onclick='interfaceShop(`achat`)'>oui</p><p class='rep' onclick='interfaceShop(`vente`)'>je préfèrerais vendre</p>")
    }, 200);
}