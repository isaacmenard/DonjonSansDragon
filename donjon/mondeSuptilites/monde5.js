if (selectMap == 5) {
    map = [
        52, 52, 52, 93, 93, 94, 94, 94,
        52, 52, 93, 93, 93, 94, 94, 94,
        52, 93, 93, 93, 93, 94, 94, 94,
        52, 93, 93, 93, 93, 94, 94, 94,
        93, 93, 93, 93, 93, 94, 94, 53,
        93, 93, 93, 93, 94, 94, 94, 53,
        93, 93, 93, 94, 94, 94, 53, 53,
        93, 93, 94, 94, 94, 53, 53, 53
    ];
    setTimeout(() => {
        var placeCercleQuest = false
        enigmeDeplacement = "N-S-S-W-N-W-E-S-W-E-S"
        enigmeDeplacement = enigmeDeplacement.split("-")
        var deplacementEnigme = ""
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 90) {
                if (document.getElementById((a - 1) + " " + 0 + " " + b)) {
                    deplacementEnigme += "N"
                }
            }
            if (e.keyCode == 81) {
                if (document.getElementById(a + " " + 0 + " " + (b - 1))) {
                    deplacementEnigme += "W"
                }
            }
            if (e.keyCode == 83) {
                if (document.getElementById((a + 1) + " " + 0 + " " + b)) {
                    deplacementEnigme += "S"
                }
            }
            if (e.keyCode == 68) {
                if (document.getElementById(a + " " + 0 + " " + (b + 1))) {
                    deplacementEnigme += "E"
                }
            }
            for (var i = 0; i < deplacementEnigme.split("").length; i++) {
                if (deplacementEnigme[i] != enigmeDeplacement[i]) {

                    if (deplacementEnigme[i] == "N") {
                        deplacementEnigme = "N"
                    } else {
                        deplacementEnigme = ""
                    }
                    i = deplacementEnigme.length

                } else {
                    if (deplacementEnigme == enigmeDeplacement.join("")) {
                        partirMonde5 = 1
                        var cercle = document.createElement("div")
                        cercle.className = "cercleTp"
                        if (placeCercleQuest == false) {
                            document.getElementById(monde5TpRetour).appendChild(cercle)
                            placeCercleQuest = true
                        }
                    }
                }
            }
        })
    }, 200);
}