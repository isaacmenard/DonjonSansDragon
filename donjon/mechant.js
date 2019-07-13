mechantDead = []
mechantLoot = []
mechantXp = []
mechantAttaques = []
mechantVieOrigine = []
function mechantCreation(am, bm, vue, vieMechant, id, deltaTime, loot, xp, attaque) {
    var Imgmechant = document.createElement("img");
    Imgmechant.src = "img/slime_bkeu.png"
    Imgmechant.className = "mechant"
    var Divmechant = document.createElement("div");
    Divmechant.className = "TheMechant"
    var progresseVie = document.createElement("div")
    progresseVie.className = ' progresseVieMechant '
    progresseVie.id=id+"Pm"
    document.body.appendChild(Divmechant)
    document.getElementsByClassName("TheMechant")[id].appendChild(Imgmechant)
    document.getElementsByClassName("TheMechant")[id].appendChild(progresseVie)
    mechant = document.getElementsByClassName("TheMechant")[id];
    mechant.id = id + "M"
    document.getElementById(am + " " + 0 + " " + bm).appendChild(mechant);
    mechantAm.push(am)
    mechantBm.push(bm)
    mechantVieOrigine.push(vieMechant)
    mechantVision.push(vue)
    mechantVie.push(vieMechant)
    mechantMouv.push(0)
    mechantTime.push(deltaTime)
    mechantLoot.push(loot)
    mechantXp.push(xp)
    mechantAttaques.push(attaque)
}

function getMechant(id) {
    var am = mechantAm[id]
    var bm = mechantBm[id]
    var vue = mechantVision[id]
    var vie = mechantVie[id]
    var time = mechantTime[id]
    var loot = mechantLoot[id]
    var xp = mechantXp[id]
    var attaque = mechantAttaques[id]
    return am + " " + bm + " " + vue + " " + vie + " " + time + " " + loot + " " + xp + " " + attaque
}

function mechant() {
    for (var i = 0; i < mechantAm.length; i++) {
        var am = getMechant(i).split(" ").slice(0, 1)
        var bm = getMechant(i).split(" ").slice(1, 2)
        var vue = getMechant(i).split(" ").slice(2, 3)
        var vieMechant = getMechant(i).split(" ").slice(3, 4)
        var deltaTime = getMechant(i).split(" ").slice(4, 5)
        var deadheuu = false
        for (var monChiffre = 0; monChiffre < mechantDead.length; monChiffre++) {
            if (mechantDead[monChiffre] == i) {
                deadheuu = true
            }
        }
        if (deadheuu == false) {
            mechantVue(parseInt(am), parseInt(bm), parseInt(vue), parseInt(vieMechant), parseInt(deltaTime), parseInt(i));
            mechantAttaque(am, bm, getMechant(i).split(" ").slice(7, 8))
        }
    }
}

function KoMechant(am, bm, idM, degat) {
    idM = idM.split("").slice(0, -1);
    mechantVie[idM] = parseInt(mechantVie[idM]) - degat;
    document.getElementById(idM+"Pm").style.width = (mechantVie[idM] * 50 / mechantVieOrigine[idM])+"px"
    if ((mechantVie[idM]) <= 0) {
        mechantDead.push(parseInt(idM))
        document.getElementById((am) + " " + 0 + " " + (bm)).removeChild(document.getElementsByClassName("TheMechant")[idM+"M"]);
        addXp(getMechant(parseInt(idM)).split(" ").slice(6, 7));
        addItem(mechantLoot[parseInt(idM)][0], mechantLoot[parseInt(idM)][1], am, bm);
    }
}

function mechantVue(am, bm, vue, vieMechant, deltaTime, id) {
    if (a < am && am - a <= vue) {
        VueMechant = 1
        if (b < bm && bm - b <= vue) {
            VueMechant = 1
        }
        if (b > bm && b - bm <= vue) {
            VueMechant = 1
        }
    }
    if (a > am && a - am <= vue) {
        VueMechant = 1
        if (b < bm && bm - b <= vue) {
            VueMechant = 1
        }
        if (b > bm && b - bm <= vue) {
            VueMechant = 1
        }
    }

    if (VueMechant == 1) {
        if (a != am || b != bm) {
            mechantDeplacement(a, b, am, bm, vieMechant, deltaTime, id, 0)
        }
    }
}

function mechantAttaque(am, bm, attaqueDamage) {
    //attention cahngement des directions suite au 3D

    //bas
    if (am <= a && a - am <= 1 && bm <= b && b - bm < 1) {
        perteDeVie(attaqueDamage)

    }
    //haut
    else if (am >= a && am - a <= 1 && bm >= b && bm - b < 1) {
        perteDeVie(attaqueDamage)

    }

    //droite
    else if (am >= a && am - a <= 1 && bm < b && b - bm <= 1) {
        perteDeVie(attaqueDamage)

    }

    //gauche
    else if (am <= a && a - am <= 1 && bm > b && bm - b <= 1) {
        perteDeVie(attaqueDamage)

    }
}

//deplacement mechant
function mechantDeplacement(x, y, am, bm, vieMechant, deltaTime, id, utilisation) {
    var interruptionM = 0;
    if (document.getElementsByClassName("TheMechant")[id]) {
        document.getElementsByClassName("TheMechant")[id].style.transitionDuration = "0.1s"

        var interruptionMMachine = setInterval(machine, 5000)

        function machine() {
            if (interruptionM == 0) {
                interruptionM = 1
            } else {
                interruptionM = 0
            }
        }
        if (am < x) {
            x -= 1
        } else if (am > x) {
            x += 1
        } else if (bm < y) {
            y -= 1
        } else if (bm > y) {
            y += 1
        }
        if (interruptionM == 0) {
            //si tu peux aller en haut :
            if (am < x && !document.getElementById((am + 1) + " " + 1 + " " + bm) && document.getElementsByClassName("TheMechant")[id] && document.getElementById((am + 1) + " " + 0 + " " + bm)) {
                document.getElementsByClassName("TheMechant")[id].style.marginLeft = "-30px"
                setTimeout(() => {
                    if (document.getElementsByClassName("TheMechant")[id]) {
                        document.getElementById((am) + " " + 0 + " " + bm).appendChild(document.getElementsByClassName("TheMechant")[id]);
                        document.getElementsByClassName("TheMechant")[id].style.marginLeft = "25px"
                        setTimeout(() => {
                            document.getElementsByClassName("TheMechant")[id].style.marginLeft = "0px"
                        }, 1);
                    }
                }, 100);


                am += 1;
            }
            //si tu peux aller en bas :
            else if (am > x && !document.getElementById((am - 1) + " " + 1 + " " + bm) && document.getElementsByClassName("TheMechant")[id] && document.getElementById((am - 1) + " " + 0 + " " + bm)) {
                document.getElementsByClassName("TheMechant")[id].style.marginLeft = "30px"
                setTimeout(() => {
                    if (document.getElementsByClassName("TheMechant")[id]) {
                        document.getElementById((am) + " " + 0 + " " + bm).appendChild(document.getElementsByClassName("TheMechant")[id]);
                        document.getElementsByClassName("TheMechant")[id].style.marginLeft = "-25px"
                        setTimeout(() => {
                            document.getElementsByClassName("TheMechant")[id].style.marginLeft = "0px"
                        }, 1);
                    }
                }, 100);

                am -= 1;
            }
            if (bm < y && !document.getElementById(am + " " + 1 + " " + (bm + 1)) && document.getElementsByClassName("TheMechant")[id] && document.getElementById((am) + " " + 0 + " " + (bm + 1))) {
                document.getElementsByClassName("TheMechant")[id].style.marginTop = "-30px"
                setTimeout(() => {
                    if (document.getElementsByClassName("TheMechant")[id]) {
                        document.getElementById((am) + " " + 0 + " " + bm).appendChild(document.getElementsByClassName("TheMechant")[id]);
                        document.getElementsByClassName("TheMechant")[id].style.marginTop = "25px"
                        setTimeout(() => {
                            document.getElementsByClassName("TheMechant")[id].style.marginTop = "0px"
                        }, 1);
                    }
                }, 100);

                bm += 1;
            }
            //si tu peux aller � gauche :
            else if (bm > y && !document.getElementById(am + " " + 1 + " " + (bm - 1)) && document.getElementsByClassName("TheMechant")[id] && document.getElementById((am) + " " + 0 + " " + (bm - 1))) {
                document.getElementsByClassName("TheMechant")[id].style.marginTop = "30px"
                setTimeout(() => {
                    if (document.getElementsByClassName("TheMechant")[id]) {
                        document.getElementById((am) + " " + 0 + " " + bm).appendChild(document.getElementsByClassName("TheMechant")[id]);
                        document.getElementsByClassName("TheMechant")[id].style.marginTop = "-25px"
                        setTimeout(() => {
                            document.getElementsByClassName("TheMechant")[id].style.marginTop = "0px"
                        }, 1);
                    }
                }, 100);
                bm -= 1;
            }
        }
        mechantAm[id] = am
        mechantBm[id] = bm
        mechantMouv[id] = 0
    }
}