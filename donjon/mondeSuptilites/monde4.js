if (selectMap == 4) {
    map = [
        103, 103, 103, 104, 72, 104, 103, 103, 103, 103,
        103, 103, 104, 104, 71, 104, 103, 103, 103, 103,
        103, 103, 104, 72, 71, 104, 104, 103, 103, 103,
        103, 103, 104, 104, 72, 104, 104, 103, 103, 64,
        103, 103, 103, 104, 104, 104, 103, 103, 64, 64,
        103, 103, 103, 103, 103, 103, 64, 64, 64, 64,
        103, 103, 103, 103, 103, 64, 64, 64, 64, 64,
        64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
        64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
        64, 64, 64, 64, 64, 64, 64, 64, 64, 64
    ];
    setTimeout(() => {
        deltaTimeG = 800;
        intervalMechant = setInterval(mechant, deltaTimeG);
        mechantCreation(3, 4, 7, 16, 0, 300, ["S_Water01", "img/S_Water01.png"], 50, 1,"img/slime_bkeu.png")
        mechantCreation(2, 4, 7, 16, 1, 300, ["S_Water01", "img/S_Water01.png"], 100, 2,"img/slime_bkeu.png")
        mechantCreation(4, 4, 7, 16, 2, 300, ["S_Water01", "img/S_Water01.png"], 100, 2,"img/slime_bkeu.png")
        mechantCreation(4, 4, 7, 16, 3, 300, ["key", "img/key.png"], 100, 2,"img/slime_bkeu.png")
    }, 200)
}