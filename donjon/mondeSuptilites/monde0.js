
move = false
passe = false

    map = [
        24, 24, 27, 27, 27, 24, 24, 24,
        24, 24, 27, 27, 27, 27, 24, 24,
        24, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
        27, 27, 27, 27, 27, 110, 110, 27,
        27, 27, 27, 110, 110, 110, 110, 27,
        27, 27, 27, 110, 110, 110, 110, 27,
        27, 27, 27, 27, 27, 27, 27, 27,
    ];

//  Écoute l'événement.
document.addEventListener('buildMap', function (e) {
  generateMonster("img/slime_bkeu.png", 100, 100, 1,"0 0 0")
}, false);
