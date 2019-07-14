perso = document.getElementsByClassName("personnage")[0];
mondeId = "";
directionNow = null
dialo2 = 0
idSelect = 1
questionEnCours = false
keys = 0
mort = false;
var test = 0;
creationFleche = 0
mechantAm = new Array()
mechantBm = new Array()
mechantVision = new Array()
mechantVie = new Array()
mechantTime = new Array()
mechantMouv = new Array()
mechantDead = new Array()
checkpapier = 0
VueMechant = 0
stopMechant = 0
caseInv = 9;
interruption = 0;
stopPlease = 0;
stopPleaseM = 0;
menuOpen = 0
compteur = 0
checkbow = 0
checkkey = 0
compteurFleche = 0
dialo = 0
passage = 0

if (navigator.userAgent.match(/(android|iphone|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {
    window.location.replace('mobile.php')
}
//cree les pages de lien pour changer de monde
var myWindow;
setTimeout(() => {
    if (Lavie <= 0) {
        perteDeVie(-4)
    }
}, 200);
XObj = []
srcAfterObj = []
YObj = []
Xaft = []
Yaft = []
LootJobs = []
xpObjJob = []

function destroy(objet) {
    idObj = parseInt(objet.id.split("").slice(0, -6))
    console.log(idObj)
    aObj = XObj[idObj]
    bObj = YObj[idObj]
    loot = LootJobs[idObj]
    srcAfter = srcAfterObj[idObj]
    if (aObj <= a && a - aObj <= 1 && bObj <= b && b - bObj <= 1) {
        suiteObj()
    }
    //haut
    else if (aObj > a && aObj - a < 1 && bObj >= b && bObj - b <= 1) {
        suiteObj()
    }

    //droite
    else if (aObj >= a && aObj - a <= 1 && bObj <= b && b - bObj <= 1) {
        suiteObj()
    }
    //centre
    else if (aObj == a && b == bObj) {
        suiteObj()
    }
    //gauche
    else if (aObj <= a + 1 && a - aObj <= 1 && bObj >= b && bObj - b <= 1) {
        suiteObj()
    }

    function suiteObj() {
        if (objet.className.split(" ")[2] == "wood" && itemSelect == "W_Axe001.png") {
            objet.src = srcAfter
            objet.className = "objetJob " + srcAfter.split("/")[1].split(".")[0]
            objet.style.marginLeft = Xaft[idObj] + "0px"
            objet.style.marginTop = Yaft[idObj] + "0px"
            addXp(xpObjJob[idObj])
            addItem(loot.split("/")[1].split(".")[0], loot, aObj, bObj)
        } else if (objet.className.split(" ")[2] == undefined) {
            alert("précisez le type d'objet (wood...)")
        }
    }
}
canBrokeWood = false
compteurObjJobs = 0;

function addObjectJob(classObj, nom, src, X, Y, srcAfter, XOff, YOff, Xafter, Yafter, loot, xp) {
    var objet = document.createElement("div");
    XObj.push(XOff)
    xpObjJob.push(xp)
    LootJobs.push(loot)
    YObj.push(YOff)
    Xaft.push(Xafter)
    Yaft.push(Yafter)
    srcAfterObj.push(srcAfter)
    objet.className = "parent" + nom + " objet "
    objet.style.marginLeft = X + "px"
    objet.style.marginTop = Y + "px"
    setTimeout(() => {
        document.getElementById((((mapSize) - (mapSize / 2) - 1) * -1) + " 0 " + (((mapSize) - (mapSize / 2) - 1) * -1)).appendChild(objet);
    }, 200);
    var objetEnfant = document.createElement("img");
    objetEnfant.className = "objetJob " + nom + " " + classObj
    objetEnfant.src = src;
    objetEnfant.id = compteurObjJobs + "ObjJob"
    objetEnfant.onclick = function () {
        destroy(this)
    }
    objet.appendChild(objetEnfant);
    compteurObjJobs += 1
}

function addObject(nom, src, X, Y) {
    var objet = document.createElement("div");
    objet.className = "parent" + nom + " objet"
    objet.style.marginLeft = X + "px"
    objet.style.marginTop = Y + "px"
    setTimeout(() => {
        document.getElementById((((mapSize) - (mapSize / 2) - 1) * -1) + " 0 " + (((mapSize) - (mapSize / 2) - 1) * -1)).appendChild(objet);
    }, 200);
    var objetEnfant = document.createElement("img");
    objetEnfant.className = nom + " objectImg"
    objetEnfant.src = src;
    objet.appendChild(objetEnfant);
}

function suiteKey(number) {
    maj()
    idSelect = number + 1;
    itemSelect = document.getElementsByClassName("caseInventaire")[number].src.split("/").slice(-1).join("/")
    document.getElementsByClassName("caseInventaire")[number].style.width = "100px"
    document.getElementsByClassName("caseInvParent")[number].style.width = "100px"
    document.getElementsByClassName("caseInvParent")[number].style.height = "100px"
}

function maj() {
    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName("caseInventaire")[i].style.width = "70px"
        document.getElementsByClassName("caseInvParent")[i].style.width = "70px"
        document.getElementsByClassName("caseInvParent")[i].style.height = "70px"
    }
}
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 49) {
        suiteKey(0)
    }
    if (e.keyCode == 50) {
        suiteKey(1)
    }
    if (e.keyCode == 51) {
        suiteKey(2)
    }
    if (e.keyCode == 52) {
        suiteKey(3)
    }
    if (e.keyCode == 53) {
        suiteKey(4)
    }
    if (e.keyCode == 54) {
        suiteKey(5)
    }
    if (e.keyCode == 55) {
        suiteKey(6)
    }
    if (e.keyCode == 56) {
        suiteKey(7)
    }
    if (e.keyCode == 57) {
        suiteKey(8)
    }
})

function cercleTpCrea(endroit) {
    var cercle = document.createElement("div")
    cercle.className = "cercleTp"
    document.getElementById(endroit).appendChild(cercle)
}
setTimeout(() => {
    itemSelect = document.getElementsByClassName("caseInventaire")[0].src.split("/").slice(-1).join("/")
    document.getElementsByClassName("caseInventaire")[0].style.width = "100px"
    document.getElementsByClassName("caseInvParent")[0].style.width = "100px"
    document.getElementsByClassName("caseInvParent")[0].style.height = "100px"
    degatArc = 9

    //deplacement des fleches du personnage
    document.addEventListener('keydown', function (e) {

        //si il a un arc
        if (itemSelect == "bow.png") {

            var xfe = 100000000
            var yfe = 100000000
            var xf = a
            var yf = b

            var fleche = document.createElement("img");
            fleche.className = "fleche"
            fleche.id = "fleche" + compteurFleche;
            if (e.keyCode == 38) {
                var avA = 0
                var avB = 1
                fleche.src = "img/flecheH.png"
            }
            if (e.keyCode == 40) {
                var avA = 0
                var avB = -1
                fleche.src = "img/flecheB.png"
            }
            if (e.keyCode == 37) {
                var avA = 1
                var avB = 0
                fleche.src = "img/flecheG.png"
            }
            if (e.keyCode == 39) {
                var avA = -1
                var avB = 0
                fleche.src = "img/flecheD.png"
            }
            if (creationFleche == 0) {
                creationFleche = 1
                setTimeout(function () {
                    creationFleche = 0
                }, 1000)
                if (document.getElementById((xf + avA) + " " + 0 + " " + (yf + avB))) {
                    valeur = 0
                } else if (document.getElementById((xf + avA) + " " + 2 + " " + (yf + avB))) {
                    valeur = 2
                }
                if (document.getElementById((xf + avA) + " " + 0 + " " + (yf + avB)) || document.getElementById((xf + avA) + " " + 2 + " " + (yf + avB))) {
                    document.getElementById((xf + avA) + " " + valeur + " " + (yf + avB)).appendChild(fleche);

                    var fleche = document.getElementById("fleche" + compteurFleche)
                    compteurFleche += 1
                    var intervalFleche = setInterval(fleches, 100);
                    var compteur = 0

                    function fleches() {
                        compteur += 1
                        if (document.getElementById((xf + avA) + " " + 0 + " " + (yf + avB))) {
                            valeur = 0
                        } else if (document.getElementById((xf + avA) + " " + 2 + " " + (yf + avB))) {
                            valeur = 2
                        }
                        if (compteur == 20) {
                            document.getElementById((xf) + " " + valeur + " " + (yf)).removeChild(fleche)
                            clearInterval(intervalFleche)

                        }
                        if (yf < yfe && !document.getElementById((xf + avA) + " " + 1 + " " + (yf + avB)) && document.getElementById((xf + avA) + " " + valeur + " " + (yf + avB))) {
                            document.getElementById((xf + avA) + " " + valeur + " " + (yf + avB)).appendChild(fleche);
                            yf += avB;
                            xf += avA;
                            if (document.getElementById((xf) + " " + valeur + " " + (yf)).getElementsByClassName('TheMechant')[0]) {
                                document.getElementById((xf) + " " + valeur + " " + (yf)).removeChild(fleche)
                                i = document.getElementById((xf) + " " + valeur + " " + (yf)).getElementsByClassName('TheMechant')[0].id
                                mechantVie[i] -= 1
                                KoMechant(xf, yf, i, degatArc)
                                i = mechantAm.length
                                clearInterval(intervalFleche)
                                return true
                            }
                        }


                    }
                }
            }
            return stopMechant;
        }
        if (itemSelect == "epee.png") {
            if (e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37) {
                var swordEffect = document.createElement("div")
                swordEffect.className = "swordEffect"
                swordEffect.style.zIndex = "1000000"
                posPerso = document.getElementById("personnage").getBoundingClientRect()
                document.getElementById(document.getElementById((a) + " 0 " + (b)).id).appendChild(swordEffect)
            }
        }
        if (itemSelect == "P_Medicine04.png") {
            if (e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 32) {
                prendreInventaire(idSelect)
                perteDeVie(-2)
            }
        }
        if (itemSelect == "ananas.png") {
            if (e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 32) {
                prendreInventaire(idSelect)
                perteDeVie(-1)
            }
        }
    });
}, 500);


function openWin(lien) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", lien, true);
    xhttp.send();
}

function closeWin() {
    // parent = document.body
    // myWindow = document.getElementById("iframe")
    // parent.removeChild(myWindow)
}

function closeWinMonde() {
    // parent = document.body
    // myWindow = document.getElementById("iframe")
    // parent.removeChild(myWindow)
    deleteTheMap()
    setTimeout(() => {
        Turbolinks.visit("index.php?directionNow=" + directionNow, {
            action: 'replace'
        })

    }, 1000);

}

//perd des points de vie suite a la fonction attaque mechant
function perteDeVie(NombreEnMoins) {
    Lavie = Lavie - NombreEnMoins
    openWin("vie.php?vie=" + (Lavie))
    if (Lavie <= 0 && mort == false) {
        openWin("vie.php?vie=" + 4)
        alert("gameOver")
        closeWin()
        setTimeout(openWin("monde.php?map=1"), 1000);
        setTimeout(closeWinMonde, 2000);
        mort = true
    } else {
        if (NombreEnMoins > 0) {
            if (document.getElementById("vie" + (Lavie))) {
                document.getElementById("vies").removeChild(document.getElementById("vie" + (Lavie)));
            } else if (document.getElementById("vie" + (Lavie - 1))) {
                (document.getElementById("vies").removeChild(document.getElementById("vie" + (Lavie - 1))))
            }
        } else {
            for (var i = 0; i < NombreEnMoins * -1; i++) {
                maDiv = document.createElement("img");
                maDiv.src = "img/coeur.png";
                maDiv.className = "vie";
                maDiv.id = "vie" + document.getElementsByClassName("vie").length;
                document.getElementById("vies").appendChild(maDiv);
            }
        }
    }
    setTimeout(closeWin, 1000)
}



function image(lien, number, passage) {
    //creation d'une case
    maDiv = document.createElement("div");
    maDiv.className = lien + " block";
    maDiv.id = i + " " + passage + " " + j;
    document.getElementById("ligne" + number).appendChild(maDiv);
}

function ligne(numero, longueur) {
    //creation d'une rang�e
    maDiv = document.createElement("div");
    maDiv.id = "ligne" + numero;
    maDiv.style.width = (longueur * 100) + "px"; // calculer la longeure du la width
    maDiv.className = "ligne";
    document.getElementById("map").appendChild(maDiv);
}



perso.style.transitionDuration = "0.1s"
//touches monter..
document.addEventListener('keydown', function (e) {
    //rmet d'�viter plusieurs deplacement d'un coup
    questionEnCours = false;
    stopPleaseM += 1;

    if (e.keyCode == 90) {
        move = true
        if (document.getElementById(a + " " + 0 + " " + (b + 1)) && passage == 0) {
            passage = 1
            setTimeout(function () {
                passage = 0
            }, 100)
            perso.style.marginTop = "-30px"
            setTimeout(() => {
                document.getElementById(a + " " + 0 + " " + (b)).appendChild(perso);
                perso.style.marginTop = "25px"
                setTimeout(() => {
                    perso.style.marginTop = "0px"
                }, 1);
            }, 100);

            b += 1;
            pnjDepartMonde1()
            if (document.getElementsByClassName("pnje")[0]) {
                document.getElementById("dialogue").removeChild(document.getElementsByClassName("pnje")[0]);
            }
        }
    }
    if (e.keyCode == 81) {
        move = true
        if (document.getElementById((a + 1) + " " + 0 + " " + b) && passage == 0) {
            passage = 1
            setTimeout(function () {
                passage = 0
            }, 100)
            perso.style.marginLeft = "-30px"
            setTimeout(() => {
                document.getElementById(a + " " + 0 + " " + (b)).appendChild(perso);
                perso.style.marginLeft = "25px"
                setTimeout(() => {
                    perso.style.marginLeft = "0px"
                }, 1);
            }, 100);
            a += 1;
            pnjDepartMonde1()
            if (document.getElementsByClassName("pnje")[0]) {
                document.getElementById("dialogue").removeChild(document.getElementsByClassName("pnje")[0]);
            }
        }
    }
    if (e.keyCode == 83) {
        move = true
        if (document.getElementById(a + " " + 0 + " " + (b - 1)) && passage == 0) {
            passage = 1
            setTimeout(function () {
                passage = 0
            }, 100)
            perso.style.marginTop = "30px"
            setTimeout(() => {
                document.getElementById(a + " " + 0 + " " + (b)).appendChild(perso);
                perso.style.marginTop = "-25px"
                setTimeout(() => {
                    perso.style.marginTop = "0px"
                }, 1);
            }, 100);
            b -= 1;
            pnjDepartMonde1()
            if (document.getElementsByClassName("pnje")[0]) {
                document.getElementById("dialogue").removeChild(document.getElementsByClassName("pnje")[0]);
            }
        }
    }
    if (e.keyCode == 68) {

        move = true
        if (document.getElementById((a - 1) + " " + 0 + " " + b) && passage == 0) {
            passage = 1
            setTimeout(function () {
                passage = 0
            }, 100)
            perso.style.marginLeft = "30px"
            setTimeout(() => {
                document.getElementById(a + " " + 0 + " " + (b)).appendChild(perso);
                perso.style.marginLeft = "-25px"
                setTimeout(() => {
                    perso.style.marginLeft = "0px"
                }, 1);
            }, 100);
            a -= 1;
            pnjDepartMonde1()
            if (document.getElementsByClassName("pnje")[0]) {
                document.getElementById("dialogue").removeChild(document.getElementsByClassName("pnje")[0]);
            }
        }
    }
    mondeTp()
    item()
});



//l� ou le perso commence
perso1 = document.getElementsByClassName("personnage")[0];
if (document.getElementById(a + " 0 " + b)) {
    document.getElementById(a + " 0 " + b).appendChild(perso1);
}
document.location.href = "#" + (a) + " 0 " + (b) //point camera d�marrage (id des cases)


function dialogues(leTexte) {
    if (document.getElementsByClassName("pnje")[0]) {
        document.getElementById("dialogue").removeChild(document.getElementsByClassName("pnje")[0]);
    }
    dialogue = document.createElement("div");
    dialogue.className = "pnje"
    document.getElementById("dialogue").appendChild(dialogue);
    document.getElementById("dialogue").style.visibility = "visible"
    var question = document.createElement("div");
    question.className = "question"
    question.innerHTML += (leTexte);
    document.getElementsByClassName("pnje")[0].appendChild(question);
}

function question(question, repA, repB, repC, repD, suiteQuestion, number) {
    var textDialogue = question
    questionEnCours = true;
    if (repA != null) {
        textDialogue += "<p class='rep' id='A' onclick='repond(this.id," + suiteQuestion + "," + number + ")'>" + repA + "</p>"
    }
    if (repB != null) {
        textDialogue += "<p class='rep' id='B' onclick='repond(this.id," + suiteQuestion + "," + number + ")'>" + repB + "</p>"
    }
    if (repC != null) {
        textDialogue += "<p class='rep' id='C' onclick='repond(this.id," + suiteQuestion + "," + number + ")'>" + repC + "</p>"
    }
    if (repD != null) {
        textDialogue += "<p class='rep' id='D' onclick='repond(this.id," + suiteQuestion + "," + number + ")'>" + repD + "</p>"
    }
    dialogues(textDialogue)
}

function repond(rep, id, number) {
    SuiteQuestion(rep, id, number)
}
var question2PassageAntiBug1 = false
var question2PassageAntiBug2 = false
function SuiteQuestion(rep, numberDemande, number) {
    switch (number) {
        case 1:
            switch (numberDemande) {
                case 1:
                    switch (rep) {
                        case "A":
                            dialogues("Merci beaucoup ! je penses qu'elles sont vers le nord de la carte,<br> utilises la fleche en haut à droite pour changer de monde !");
                            break;
                        case "B":
                            dialogues("aaarg, au cas ou tu change d'avis, je penses qu'elles sont vers le nord de la carte,<br> utilises la fleche en haut à droite pour changer de monde !");
                            break;
                    }
                    break;
            }
            break;
        case 6:
            switch (numberDemande) {
                case 1:
                    var candy = chercheInv("cake.png")
                    if (candy == false) {
                        dialogues("Youuupiii !");
                    } else {
                        candy = candy.split(" ")
                        if (question2PassageAntiBug2 == false) {
                            prendreInventaire(candy[0])
                            addXp(300)
                            question2PassageAntiBug2 = true
                            dialogues("ooooooooh trop coool ! <br> merci beaucoup !")
                        }
                        rep = null
                        numberDemande = 2
                        number = 6
                        break;
                    }
                    break;
                    case 2:
                        dialogues("ooooooooh trop coool ! <br> merci beaucoup !")
                    break;
            }
            break;
            case 5:
                switch (numberDemande) {
                    case 1:
                        switch (rep) {
                            case "A":
                                var gelee = chercheInv("S_Water01.png")
                                if (gelee == false) {
                                    dialogues("Merci à toi, je t'attend ici !");
                                } else {
                                    gelee = gelee.split(" ")
                                    if (question2PassageAntiBug1 == false) {
                                        prendreInventaire(gelee[0])
                                        addXp(300)
                                        question2PassageAntiBug1 = true
                                        dialogues("Mille fois Merci !!!!")
                                    }
                                    rep = null
                                    numberDemande = 2
                                    number = 5
                                }
                                break;
                            case "B":
                                dialogues("aaarg");
                                break;
                        }
                        break;
                    case 2:
                        dialogues("Mille fois Merci !!!!")
                        break;
                }
                break;
    }
    majQuest(rep, numberDemande, number);
}

function majQuest(reponse, id, number) {
    var laQuete = chercheQuest2(number)
    if (laQuete != null) {
        quete[laQuete] = number + ":" + id + "_" + reponse
    } else {
        quete.push(number + ":" + id + "_" + reponse)
    }
    var resultatQuest = "['" + quete.join("','") + "']"
    openWin("quest.php?quest=" + resultatQuest)
    setTimeout(closeWin, 100)
}

function chercheInv(src) {
    console.log(src)
    var returnObject = false
    for (var i = 0; i < document.getElementsByClassName("caseInventaire").length; i++) {
        if (document.getElementsByClassName("caseInventaire")[i].src.split("/").slice(-1).join("/") == src) {
            returnObject = document.getElementsByClassName("caseInventaire")[i].id + " " + document.getElementsByClassName("caseInventaire")[i].src + " " + document.getElementsByClassName("caseInventaire")[i].className
        }
    }
    for (var i = 0; i < document.getElementsByClassName("caseInventaireMoreInv").length; i++) {
        if (document.getElementsByClassName("caseInventaireMoreInv")[i].src.split("/").slice(-1).join("/") == src) {
            returnObject = document.getElementsByClassName("caseInventaireMoreInv")[i].id + " " + document.getElementsByClassName("caseInventaireMoreInv")[i].src + " " + document.getElementsByClassName("caseInventaireMoreInv")[i].className
        }
    }
    return returnObject
}