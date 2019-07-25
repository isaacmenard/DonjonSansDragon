if (selectMap == 3) {
    map = [
        56, 56, 57, 106, 60, 60,
        56, 56, 106, 106, 60, 60,
        56, 57, 106, 106, 60, 60,
        61, 57, 106, 106, 59, 59,
        61, 61, 61, 58, 58, 59,
        61, 61, 61, 61, 58, 59
    ];
    setTimeout(() => {
        deltaTimeG = 500;
        intervalMechant = setInterval(mechant, deltaTimeG);
        mechantCreation(3, -2, 3, 1, 0, 500, ["S_Water01", "img/S_Water01.png"], 50, 19,"img/slime_bkeu.png")
    }, 200);
}