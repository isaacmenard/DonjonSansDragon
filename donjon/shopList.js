listeAchat = [
    [10, "W_Axe001"], "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
]
MiseAJourShop()

function MiseAJourShop() {
    document.getElementsByClassName("listeAchatShop")[0].innerHTML = ""
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
function AchatShop(id){
    money -= listeAchat[id][0]
    ajoutInventaire3(listeAchat[id][1])
    miseAJourMoney()
    viderShop()
}

function viderShop() {
    document.getElementsByClassName("listePlanShop")[0].innerHTML = ""
}
function miseAJourMoney(){
    openWin("money.php?money="+money)
}
shopInterfaceOpen = false

function interfaceShop() {
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