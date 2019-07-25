caseInv = 9;
itemSurLaMap = []
InvOpen = false;
creationInventaire()
//inventaire

if(slot.length > 300){
    slot.slice(0,300)
}
function addItem(name, src, Aobj, Bobj) {
    objetParent = document.createElement("div");
    objetParent.className = "parent" + name + " parentItem"
    document.getElementById(Aobj + " " + 0 + " " + Bobj).appendChild(objetParent);
    objet = document.createElement("img");
    objet.className = name + " item"
    objet.src = src
    objetParent.appendChild(objet);
    itemSurLaMap.push(name)
}

function item() {
    for (var i = 0; i < itemSurLaMap.length; i++) {
        if (document.getElementById(a + " " + 0 + " " + b).getElementsByClassName("item")[i]) {
            ajoutInventaire2(document.getElementById(a + " " + 0 + " " + b).getElementsByClassName("item")[i].className, i);
        }
    }
}
function ajoutInventaire3(src){
    var place = getAPlace()
    numero = null
    for(var i = 0; i < document.getElementsByClassName("caseInventaireMoreInv").length;i++){
        if(place == document.getElementsByClassName("caseInventaireMoreInv")[i] || i < 9 && place == document.getElementsByClassName("caseInventaire")[i]){
            var numero = i
        }
    }
    if(numero != null){
        slot[numero] = src
        mettreAJourInv()
    }
}
setTimeout(() => {
    for (var i = 0; i < slot.length + 1; i++) {
        if (slot[i] != null || slot[i] != "") {
            ajoutInventaire(slot[i], i)
        }
    }
}, 100);

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("src", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var src = document.getElementById(ev.dataTransfer.getData("src"));
    var srcParent = src.parentNode;
    var tgt = ev.currentTarget.firstElementChild;
    if (tgt.style.width == "100px") {
        src.style.width = "100px"
        tgt.style.width = "70px"
    } else if (src.style.width == "100px") {
        tgt.style.width = "100px"
        src.style.width = "70px"
    }
    if (src.id.split("").slice(-4).join("") == "More") {
        var src1 = slot[(parseInt(src.id.split("").slice(0, -4).join("")) - 1)]
        slot[(src.id.split("").slice(0, -4).join("") - 1)] = slot[(tgt.id.split("").slice(0, -4).join("") - 1)]
        slot[(tgt.id.split("").slice(0, -4).join("") - 1)] = src1

    } else if (src.id.split("").slice(-1).join("") == "C") {
        var src1 = slot[(parseInt(src.id.split("").slice(0, -1).join("")))]
        slot[parseInt(src.id.split("").slice(0, -1).join(""))] = slot[parseInt(tgt.id.split("").slice(0, -1).join(""))]
        slot[parseInt(tgt.id.split("").slice(0, -1).join(""))] = src1

    } else {
        var src1 = slot[(src.id - 1)]
        slot[(src.id - 1)] = slot[(tgt.id - 1)]
        slot[(tgt.id - 1)] = src1
    }
    ev.currentTarget.replaceChild(src, tgt);
    srcParent.appendChild(tgt);
    mettreAJourInv()
    document.getElementsByClassName("caseInventaire")[idSelect - 1].style.width = "100px"
    document.getElementsByClassName("caseInvParent")[idSelect - 1].style.width = "100px"
    document.getElementsByClassName("caseInvParent")[idSelect - 1].style.height = "100px"

}
function mettreAJourInv(){
    miseAJourInv()
    majPetClient()
    CaseInvFunction()
    suiteKey(idSelect-1)
    for (var i = 0; i < slot.length + 1; i++) {
        if (slot[i] != null || slot[i] != "") {
            ajoutInventaire(slot[i], i)
        }
    }
}
function CaseInvFunction() {
    
    //gere les cases de l'inventaire
    document.getElementById("slot").innerHTML = ""
    document.getElementById("invMore").innerHTML = ""
    document.getElementsByClassName("droiteInventaireCraft")[0].innerHTML = ""
    document.getElementsByClassName("petInventaire")[0].innerHTML = ""
    document.getElementsByClassName("droiteInventaireShop")[0].innerHTML = ""
    for (var i = 0; i < caseInv; i++) {
        var Parent = document.createElement("div");
        Parent.className = "caseInvParent"
        Parent.ondrop = function () {
            drop(event)
        }
        Parent.ondragover = function () {
            allowDrop(event)
        }
        document.getElementById("slot").appendChild(Parent);
        var maDiv = document.createElement("img");
        maDiv.className = "caseInventaire";
        maDiv.draggable = "true"
        maDiv.ondragstart = function () {
            drag(event)
        }
        maDiv.ondblclick = function () {
            openWin("slot.php?slot=" + (this.id) + "&item=" + "")
            retirerInventaire(this.id, this.src, this.src.split("/").slice(-1).join("").split(".").shift())
            closeWin()
        }
        maDiv.onclick = function () {
            ouvert(this)
        }
        maDiv.id = i + 1
        maDiv.src = "img/caseInv.png"
        document.getElementsByClassName("caseInvParent")[i].appendChild(maDiv)
    }
    compteur9 = 2
    compteurInv = 0
    var ParentIv = document.createElement("div");
    ParentIv.id = "invMoreRap"
    document.getElementById("invMore").appendChild(ParentIv);
    var ParentIv = document.createElement("div");
    ParentIv.id = "invMoreOther"
    document.getElementById("invMore").appendChild(ParentIv);
    for (var i = 0; i < 90; i++) {
        if (i / 9 == compteur9) {
            document.getElementById("invMoreOther").appendChild(document.createElement("br"));
            compteur9++
        }
        var Parent = document.createElement("div");
        Parent.className = "caseInvParentMoreInv"
        Parent.ondrop = function () {
            drop(event)
        }
        Parent.ondragover = function () {
            allowDrop(event)
        }
        if (i < 9) {
            document.getElementById("invMoreRap").appendChild(Parent);
        } else {
            document.getElementById("invMoreOther").appendChild(Parent);
        }
        var maDiv = document.createElement("img");
        maDiv.className = "caseInventaireMoreInv";
        maDiv.ondblclick = function () {
            openWin("slot.php?slot=" + (this.id.split("").slice(0, -4).join("") - 1) + "&item=" + "")
            retirerInventaire(this.id.split("").slice(0, -4).join(""), this.src, this.src.split("/").slice(-1).join("").split(".").shift())
            closeWin()
        }
        maDiv.draggable = "true"
        maDiv.ondragstart = function () {
            drag(event)
        }
        maDiv.onclick = function () {
            ouvert(this)
        }
        maDiv.id = (i + 1) + "More"

        maDiv.src = "img/caseInv.png"
        document.getElementsByClassName("caseInvParentMoreInv")[i].appendChild(maDiv)
        if (!slot[compteurInv] && slot.length < 300) {
            slot.push("")
        }
        compteurInv++
    }
    for (var i = 0; i < 90; i++) {
        var Parent = document.createElement("div");
        Parent.className = "casePetParentInv"
        Parent.ondrop = function () {
            drop(event)
        }
        Parent.ondragover = function () {
            allowDrop(event)
        }
        document.getElementsByClassName("petInventaire")[0].appendChild(Parent);
        var maDiv = document.createElement("img");
        maDiv.className = "casePetInv";
        maDiv.ondblclick = function () {
            openWin("slot.php?slot=" + (this.id.split("").slice(0, -1)) + "&item=" + "")
            retirerInventaire(parseInt(this.id.split("").slice(0, -1).join(""))+1, this.src, this.src.split("/").slice(-1).join("").split(".").shift())
            closeWin()
        }
        maDiv.draggable = "true"
        maDiv.ondragstart = function () {
            drag(event)
        }
        maDiv.id = i + "P"
        document.getElementsByClassName("casePetParentInv")[i].appendChild(maDiv)
    }
    for (var i = 0; i < 90; i++) {
        var Parent = document.createElement("div");
        Parent.className = "caseShopParentInv"
        Parent.ondrop = function () {
            drop(event)
        }
        Parent.ondragover = function () {
            allowDrop(event)
        }
        document.getElementsByClassName("droiteInventaireShop")[0].appendChild(Parent);
        var maDiv = document.createElement("img");
        maDiv.className = "caseShopInv";
        maDiv.ondblclick = function () {
            openWin("slot.php?slot=" + (this.id.split("").slice(0, -1)) + "&item=" + "")
            retirerInventaire(parseInt(this.id.split("").slice(0, -1).join(""))+1, this.src, this.src.split("/").slice(-1).join("").split(".").shift())
            closeWin()
        }
        maDiv.draggable = "true"
        maDiv.ondragstart = function () {
            drag(event)
        }
        maDiv.id = i + "S"
        document.getElementsByClassName("caseShopParentInv")[i].appendChild(maDiv)
    }
    for (var i = 0; i < 90; i++) {
        var Parent = document.createElement("div");
        Parent.className = "caseInvParentCraft"
        Parent.ondrop = function () {
            drop(event)
        }
        Parent.ondragover = function () {
            allowDrop(event)
        }
        document.getElementsByClassName("droiteInventaireCraft")[0].appendChild(Parent);
        var maDiv = document.createElement("img");
        maDiv.className = "caseInvCraft";
        maDiv.ondblclick = function () {
            openWin("slot.php?slot=" + (this.id.split("").slice(0, -1)) + "&item=" + "")
            retirerInventaire(parseInt(this.id.split("").slice(0, -1).join(""))+1, this.src, this.src.split("/").slice(-1).join("").split(".").shift())
            closeWin()
        }
        maDiv.draggable = "true"
        maDiv.ondragstart = function () {
            drag(event)
        }
        maDiv.id = i + "C"
        document.getElementsByClassName("caseInvParentCraft")[i].appendChild(maDiv)
    }
    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName("caseInventaire")[i].style.width = "70px"
        document.getElementsByClassName("caseInvParent")[i].style.width = "70px"
        document.getElementsByClassName("caseInvParent")[i].style.height = "70px"
    }
    var Parent = document.createElement("div");
    Parent.className = "caseInvParent"
    document.getElementById("slot").appendChild(Parent);
    var maDiv = document.createElement("img");
    maDiv.className = "caseInventaire caseMore";
    maDiv.onclick = function () {
        MoreInventaire()
    }
    maDiv.src = "https://images.ecosia.org/Kbhh6ZdCbk7H9WirDmGSNZ962zY=/0x390/smart/https%3A%2F%2Fimg.icons8.com%2Fmetro%2F1600%2Fplus-math.png"
    Parent.appendChild(maDiv)
    //table de craft
}

function creationInventaire() {
    CaseInvFunction()
    setTimeout(() => {
        MiseAJourPlan()
        majPetClient()
    }, 200);
}

function ouvert(id) {
    if (id.src.split("/").slice(-1).join("/") == "bow.png") {
        dialogues("Ceci est un arc, utilise le avec les fleches directionnels de ton clavier")
    }
    if (id.src.split("/").slice(-1).join("/") == "P_Medicine04.png") {
        dialogues("Ceci est une potion de vie, utilise la avec espace ou les fleches directionnels de ton clavier")
    }
}

function addXp(numberXp) {
    xpJ[1] = (parseInt(numberXp) + parseInt(xpJ[1]))
    while (xpJ[1] >= xpJ[2]) {
        xpJ[0] += 1
        xpJ[1] = xpJ[1] - xpJ[2]
        xpJ[2] = Math.round(xpJ[2] * 1.2)
        newLevel(xpJ[0])
        MiseAJourPlan()
    }
    xpJ[0] = Math.round(xpJ[0])
    xpJ[1] = Math.round(xpJ[1])
    xpJ[2] = Math.round(xpJ[2])
    var result = xpJ.join(',')
    result = '[' + result + ']'
    openWin("xp.php?xp=" + result)
    setTimeout(closeWin, 1000)
    setXp()
}

function newLevel(level) {
    alert("GG ! tu passes level " + level)
}
setXp()
setVie()
function setXp() {
    xpJ[0] = parseInt(xpJ[0])
    xpJ[1] = parseInt(xpJ[1])
    xpJ[2] = parseInt(xpJ[2])
    document.getElementById("0Xp").innerHTML = xpJ[0];
    document.getElementById("1Xp").innerHTML = xpJ[1];
    document.getElementById("2Xp").innerHTML = xpJ[2];
    document.getElementsByClassName("progressXp")[1].style.width = xpJ[1] * 100 / xpJ[2] + "%"
}

function setVie() {
    document.getElementById("1Vie").innerHTML = Lavie;
    document.getElementById("2Vie").innerHTML = vieMax;
    document.getElementsByClassName("progressVie")[0].style.width = Lavie * 100 / vieMax + "%"
}

function getAPlace() {
    for (var i = 0; i < document.getElementsByClassName("caseInventaireMoreInv").length; i++) {
        if (i < 9) {
            if (document.getElementsByClassName("caseInventaire")[i].src.split("/").slice(-2).join("/") == "img/caseInv.png") {
                return document.getElementsByClassName("caseInventaire")[i]
            }
        } else {
            if (document.getElementsByClassName("caseInventaireMoreInv")[i - 9].src.split("/").slice(-2).join("/") == "img/caseInv.png") {
                return document.getElementsByClassName("caseInventaireMoreInv")[i - 9]
            }
        }
    }
}

function ajoutInventaire(classObjet, numero) {
    //permet d'ajouetr un item � l'inventaire
    if (classObjet != "" && classObjet != null) {
        if (numero < 9) {
            document.getElementsByClassName("caseInventaire")[numero].src = "img/" + classObjet + ".png";
            document.getElementsByClassName("caseInventaireMoreInv")[numero].src = "img/" + classObjet + ".png";
        } else {
            document.getElementsByClassName("caseInventaireMoreInv")[numero].src = "img/" + classObjet + ".png";
        }
        if (document.getElementsByClassName("caseInvCraft")[numero]) {
            document.getElementsByClassName("caseInvCraft")[numero].src = "img/" + classObjet + ".png";
        }
        if (document.getElementsByClassName("casePetInv")[numero]) {
            document.getElementsByClassName("casePetInv")[numero].src = "img/" + classObjet + ".png";
        }
        if (document.getElementsByClassName("caseShopInv")[numero]) {
            document.getElementsByClassName("caseShopInv")[numero].src = "img/" + classObjet + ".png";
        }
    } else {
        if (numero < 9) {
            document.getElementsByClassName("caseInventaire")[numero].style.visibility = "hidden";
            document.getElementsByClassName("caseInventaireMoreInv")[numero].style.visibility = "hidden";
        } else {
            if (document.getElementsByClassName("caseInventaireMoreInv")[numero]) {
                document.getElementsByClassName("caseInventaireMoreInv")[numero].style.visibility = "hidden";
            }
        }
        if (document.getElementsByClassName("caseInvCraft")[numero]) {
            document.getElementsByClassName("caseInvCraft")[numero].style.visibility = "hidden";
        }
        if (document.getElementsByClassName("casePetInv")[numero]) {
            document.getElementsByClassName("casePetInv")[numero].style.visibility = "hidden";
        }
        if (document.getElementsByClassName("caseShopInv")[numero]) {
            document.getElementsByClassName("caseShopInv")[numero].style.visibility = "hidden";
        }
    }
}

function ajoutInventaire2(classObjet, numero) {
    if(classObjet.split(" ")[1] == "item"){
        classObjet = classObjet.split("").slice(0, -5).join("")
    }
    var Place = getAPlace()
    if (Place != undefined) {
        if (Place.className == "caseInventaireMoreInv") {
            Place.style.visibility = ""
            Place.src = document.getElementsByClassName(classObjet)[numero].src;
            slot[(Place.id.split("").slice(0, -4).join("") - 1)] = document.getElementsByClassName(classObjet)[numero].className.split("").slice(0, -5).join("")
            mettreAJourInv()
            var parent = document.getElementById(a + " 0 " + b).getElementsByClassName("parentItem")[numero]
            document.getElementById(a + " 0 " + b).removeChild(parent)
            itemSelect = document.getElementsByClassName("caseInventaire")[idSelect - 1].src.split("/").slice(-1).join("/")
            return true
        } else {
            var reperePlace = null
            for (var i = 0; i < 9; i++) {
                if (Place == document.getElementsByClassName("caseInventaire")[i]) {
                    reperePlace = i
                }
            }
            document.getElementsByClassName("caseInventaireMoreInv")[reperePlace].style.visibility = ""
            document.getElementsByClassName("caseInventaireMoreInv")[reperePlace].src = document.getElementsByClassName(classObjet)[numero].src;
            Place.style.visibility = ""
            Place.src = document.getElementsByClassName(classObjet)[numero].src;
            slot[(Place.id - 1)] = document.getElementsByClassName(classObjet)[numero].className.split("").slice(0, -5).join("")
            mettreAJourInv()
            var parent = document.getElementById(a + " 0 " + b).getElementsByClassName("parentItem")[numero]
            document.getElementById(a + " 0 " + b).removeChild(parent)
            itemSelect = document.getElementsByClassName("caseInventaire")[idSelect - 1].src.split("/").slice(-1).join("/")
        }
    }
}

function miseAJourInv() {
    var result = slot.join('","')
    result = '["' + result + '"]'

    openWin("slot.php?item="+result)
    setTimeout(closeWin, 1000)
}
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 67) {
        tableDeCraft()
    }
});
tableDeCraftOpen = false
document.getElementsByClassName("craft")[0].style.visibility = "hidden"

function tableDeCraft() {
    if (tableDeCraftOpen == false) {
        document.getElementsByClassName("craft")[0].style.visibility = "visible"
        tableDeCraftOpen = true
        document.getElementsByClassName("inventaire")[0].style.visibility = "hidden"
    } else {
        document.getElementsByClassName("craft")[0].style.visibility = "hidden"
        tableDeCraftOpen = false
        document.getElementsByClassName("inventaire")[0].style.visibility = "visible"
    }
}

function retirerInventaire(id, srcObj, classNameObj) {
    slot[id - 1] = ""
    var result = slot.join('","')
    result = '["' + result + '"]'
    openWin("slot.php?item=" + result)
    setTimeout(closeWin, 1000)
    if (id > 9) {
        document.getElementById(id + "More").src = "img/caseInv.png"
        document.getElementById(id + "More").style.visibility = "hidden"
    } else {
        document.getElementById(id).src = "img/caseInv.png"
        document.getElementById(id).style.visibility = "hidden"
        document.getElementById(id + "More").src = "img/caseInv.png"
        document.getElementById(id + "More").style.visibility = "hidden"
    }
    mettreAJourInv()
    addItem(classNameObj, srcObj, a, b)
}

function prendreInventaire(id) {
    if(typeof(id) != "number" && id.split("").slice(-4).join("") == "More"){
        id = id.split("").slice(0,-4).join("")
    }
    slot[id - 1] = ""
    var result = slot.join('","')
    result = '["' + result + '"]'
    openWin("slot.php?item=" + result)
    setTimeout(closeWin, 1000)
    if (id > 9) {
        if (document.getElementById(id + "More")) {
            document.getElementById(id + "More").src = "img/caseInv.png"
            document.getElementById(id + "More").style.visibility = "hidden"
        }
    } else {
        if (document.getElementById(id)) {
            document.getElementById(id).src = "img/caseInv.png"
            document.getElementById(id).style.visibility = "hidden"
        }
        if (document.getElementById(id + "More")) {
            document.getElementById(id + "More").src = "img/caseInv.png"
            document.getElementById(id + "More").style.visibility = "hidden"
        }
    }
    mettreAJourInv()
}

function MoreInventaire() {
    if (InvOpen == false) {
        document.getElementsByClassName('InvMore')[0].style.visibility = 'visible';
        document.getElementsByClassName("inventaire")[0].style.visibility = "hidden"
        InvOpen = true
    } else {
        document.getElementsByClassName('InvMore')[0].style.visibility = 'hidden';
        document.getElementsByClassName("inventaire")[0].style.visibility = "visible"
        InvOpen = false
    }
}