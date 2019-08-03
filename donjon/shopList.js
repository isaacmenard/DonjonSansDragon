listeAchat = [
    [10, "W_Axe001"],
    [10, "W_Spear008"],"" ,[8, "wood"],[8, "I_SilverBar"],"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
]
listeVente = [
    [6, "S_Water01"],[6, "wood"],[6, "I_SilverBar"],"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
]

document.getElementsByClassName("money")[0].innerHTML = money
function MiseAJourShop(typeShop) {
    viderShop()
    document.getElementsByClassName("listeAchatShop")[0].innerHTML = ""
    if (typeShop == "achat") {
        for (var i = 0; i < listeAchat.length; i++) {
            var Parent = document.createElement("div");
            Parent.className = "caseAchatParentShop"
            document.getElementsByClassName("listeAchatShop")[0].appendChild(Parent);
            var maDiv = document.createElement("img");
            if (listeAchat[i] != "") {
                maDiv.src = "img/" + listeAchat[i][1] + ".png"
            } else {
                maDiv.style.visibility = "hidden"
            }
            maDiv.className = "caseAchatShop " + listeAchat[i][1];
            maDiv.onclick = function () {
                shoping(this.id.split("").slice(0, -6).join(""))
            }
            maDiv.id = (i) + "SAchat"
            document.getElementsByClassName("caseAchatParentShop")[i].appendChild(maDiv)
        }
    }else if(typeShop == "vente"){
        for (var i = 0; i < listeVente.length; i++) {
            var Parent = document.createElement("div");
            Parent.className = "caseAchatParentShop"
            document.getElementsByClassName("listeAchatShop")[0].appendChild(Parent);
            var maDiv = document.createElement("img");
            if (listeVente[i] != "") {
                maDiv.src = "img/" + listeVente[i][1] + ".png"
            } else {
                maDiv.style.visibility = "hidden"
            }
            maDiv.className = "caseAchatShop " + listeVente[i][1];
            maDiv.onclick = function () {
                vente(this.id.split("").slice(0, -6).join(""))
            }
            maDiv.id = (i) + "SVente"
            document.getElementsByClassName("caseAchatParentShop")[i].appendChild(maDiv)
        }
    }
}

function shoping(id) {
    viderShop()

    var piece = document.createElement("img")
    piece.src = "img/coin.png"
    piece.className = "coin imgShop"
    var objet = document.createElement("img")
    objet.src = "img/" + listeAchat[id][1] + ".png"
    objet.className = "objetDuShop imgShop"
    var fleche = document.createElement("img")
    fleche.src = "img/arrowMap.png"
    fleche.className = "flecheShop imgShop"
    var fois = document.createElement("img")
    fois.src = "img/X.png"
    fois.className = "fois imgShop"
    var prix = document.createElement("a")
    prix.className = "prix fois imgShop"
    prix.innerHTML = listeAchat[id][0]
    var divMoney = document.createElement("div")
    divMoney.className = ("divMoney")

    divMoney.appendChild(piece)
    divMoney.appendChild(fois)
    divMoney.appendChild(prix)
    divMoney.appendChild(fleche)
    divMoney.appendChild(objet)

    if (money >= listeAchat[id][0]) {
        var Parent = document.createElement("div");
        Parent.className = "validerCraftParent"
        document.getElementsByClassName("listePlanShop")[0].appendChild(Parent);
        var maDiv = document.createElement("img");
        maDiv.className = "validerCraft";
        maDiv.onclick = function () {
            AchatShop(id)
        }
        maDiv.src = "https://www.onlygfx.com/wp-content/uploads/2017/09/grunge-arrow-2-1-1024x823.png"
        Parent.appendChild(maDiv)
    }
    document.getElementsByClassName("listePlanShop")[0].appendChild(divMoney)
}
function vente(id) {
    viderShop()

    var piece = document.createElement("img")
    piece.src = "img/coin.png"
    piece.className = "coin imgShop"
    var objet = document.createElement("img")
    objet.src = "img/" + listeVente[id][1] + ".png"
    objet.className = "objetDuShop imgShop"
    var fleche = document.createElement("img")
    fleche.src = "img/arrowMap.png"
    fleche.className = "flecheShop imgShop"
    var fois = document.createElement("img")
    fois.src = "img/X.png"
    fois.className = "fois imgShop"
    var prix = document.createElement("a")
    prix.className = "prix fois imgShop"
    prix.innerHTML = listeVente[id][0]
    var divMoney = document.createElement("div")
    divMoney.className = ("divMoney")

    divMoney.appendChild(objet)
    divMoney.appendChild(fleche)
    divMoney.appendChild(piece)
    divMoney.appendChild(fois)
    divMoney.appendChild(prix)

    if (chercheInv(listeVente[id][1] + ".png") != false) {
        var Parent = document.createElement("div");
        Parent.className = "validerCraftParent"
        document.getElementsByClassName("listePlanShop")[0].appendChild(Parent);
        var maDiv = document.createElement("img");
        maDiv.className = "validerCraft";
        maDiv.onclick = function () {
            venteShop(id)
        }
        maDiv.src = "https://www.onlygfx.com/wp-content/uploads/2017/09/grunge-arrow-2-1-1024x823.png"
        Parent.appendChild(maDiv)
    }
    document.getElementsByClassName("listePlanShop")[0].appendChild(divMoney)
}

function AchatShop(id) {
    money -= listeAchat[id][0]
    ajoutInventaire3(listeAchat[id][1])
    miseAJourMoney()
}
function venteShop(id){
    money += listeVente[id][0]
    var itemNeed = chercheInv(listeVente[id][1] + ".png")
    prendreInventaire(parseInt(itemNeed.split(" ")[0].split("").slice(0, -4).join("")))
    miseAJourMoney()
}

function viderShop() {
    document.getElementsByClassName("listePlanShop")[0].innerHTML = ""
}

function miseAJourMoney() {
    document.getElementsByClassName("money")[0].innerHTML = money
    openWin("money.php?money=" + money)
}
shopInterfaceOpen = false

function interfaceShop(type) {
    MiseAJourShop(type)
    if (shopInterfaceOpen == false) {
        document.getElementsByClassName("shop")[0].style.visibility = "visible"
        shopInterfaceOpen = true
        document.getElementsByClassName("inventaire")[0].style.visibility = "hidden"
    } else {
        document.getElementsByClassName("shop")[0].style.visibility = "hidden"
        shopInterfaceOpen = false
        document.getElementsByClassName("inventaire")[0].style.visibility = "visible"
    }
}