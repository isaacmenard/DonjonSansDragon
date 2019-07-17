if (selectMap == 40) {
    map = [
        92, 92, 92, 123, 123, 123, 92, 92, 123, 123,
        92, 92, 92, 123, 123, 92, 92, 92, 92, 123,
        92, 92, 92, 123, 92, 92, 92, 92, 92, 123,
        92, 92, 123, 123, 92, 92, 92, 92, 92, 123,
        92, 123, 123, 123, 92, 92, 92, 92, 92, 92,
        123, 123, 123, 123, 92, 92, 92, 92, 92, 92,
        123, 92, 123, 123, 92, 92, 92, 92, 92, 92,
        92, 92, 92, 123, 123, 92, 92, 92, 92, 123,
        92, 92, 92, 123, 123, 92, 92, 92, 123, 123,
        123, 92, 92, 123, 123, 123, 92, 92, 123, 123
    ];
    window.onload = function () {
        addObject("pont", "img/bridge2.png", -535, -110)
        addObject("pont", "img/bridge1.png", -360, 120)
        antiColision = ["2 0 -3", "1 0 -3", "4 0 0", "4 0 1"]
        cercleTpCrea("5 0 5")
        pnjCreation(5, 5, "", "hidden", "Où souhaitez-vous aller ?<p class='rep' onclick='openWin(\"monde.php?map=11\");closeWinMonde()'> Sur terre ? </p><p class='rep'  onclick='openWin(\"monde.php?map=41\");closeWinMonde()'>Dans la citée sous Marine ?</p>")
        pnjCreation(1, 2, "img/voyante.png", "pnj voyante ", ["Ahhhhhhhh !!!!!", "Quoi ?", null, null, null, 1, 7])
    }
}