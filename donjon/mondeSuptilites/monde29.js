if (selectMap == 29) {
    map = [
        24, 24, 24, 24, 27, 27, 27, 27,
        24, 24, 27, 27, 27, 27, 27, 27,
        24, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 24, 24, 24, 24, 27, 27,
        27, 27, 24, 24, 24, 24, 27, 27,
        27, 27, 24, 24, 24, 24, 27, 27
    ];
    setTimeout(() => {
        colision = ["-2 0 1","-2 0 2"]
        addObject("fence", "img/cart.png", -270, -170)
        addObject("arbre", "img/tree.png", -380, -190)
        addObject("maison", "img/house-mill.png", -210, -310)
        addObject("maison", "img/house-mill.png", -210, -310)
        addObject("fence", "img/fence2.png", -170, 240)
        addObject("fence", "img/fence2.png", -110, 240)
        addObject("fence", "img/fence1.png", -80, 210)
        addObject("fence", "img/fence1.png", -80, 160)
        addObject("fence", "img/fence2.png", -170, 70)
        addObject("fence", "img/fence2.png", -110, 70)
        addObject("fence", "img/fence1.png", -300, 80)
        addObject("fence", "img/fence1.png", -300, 115)

        addObjectJob("plant","fence", "img/flower2.png", -260, 105, "img/hidden.png", 2, -1, 0,0,"img/I_C_Watermellon.png", 50)
        addObjectJob("plant","fence", "img/flower2.png", -260, 165, "img/hidden.png", 2, -2, 0,0,"img/I_C_Watermellon.png", 50)
        addObjectJob("plant","fence", "img/flower2.png", -260, 225, "img/hidden.png", 2, -3, 0,0,"img/I_C_Watermellon.png", 50)

        addObjectJob("plant","fence", "img/flower2.png", -200, 105, "img/hidden.png", 1, -1, 0,0,"img/I_C_Watermellon.png", 50)
        addObjectJob("plant","fence", "img/flower2.png", -200, 165, "img/hidden.png", 1, -2, 0,0,"img/I_C_Watermellon.png", 50)
        addObjectJob("plant","fence", "img/flower2.png", -200, 225, "img/hidden.png", 1, -3, 0,0,"img/I_C_Watermellon.png", 50)

        addObjectJob("plant","fence", "img/flower2.png", -140, 105, "img/hidden.png", 0, -1, 0,0,"img/I_C_Watermellon.png", 50)
        addObjectJob("plant","fence", "img/flower2.png", -140, 165, "img/hidden.png", 0, -2, 0,0,"img/I_C_Watermellon.png", 50)
        addObjectJob("plant","fence", "img/flower2.png", -140, 225, "img/hidden.png", 0, -3, 0,0,"img/I_C_Watermellon.png", 50)
    }, 200);

}