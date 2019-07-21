function MiseAJourShop() {
    shopDispo = [["img/W_Axe001.png", 10]]
    document.getElementsByClassName("listePlanShop")[0].innerHTML = ""
    for (var i = 0; i < listePlan.length; i++) {
        var Parent = document.createElement("div");
        Parent.className = "casePlanParentShop"
        document.getElementsByClassName("listePlanShop")[0].appendChild(Parent);
        var maDiv = document.createElement("img");
        if (listePlan[i] != "") {
            maDiv.src = "img/" + listePlan[i][0] + ".png"
        } else {
            maDiv.style.visibility = "hidden"
        }
        maDiv.className = "caseInvPlan " + listePlan[i][0];
        maDiv.onclick = function () {
            craft(this.id.split("").slice(0, -5).join(""))
        }
        maDiv.id = (i) + "CPlan"
        document.getElementsByClassName("casePlanParentCraft")[i].appendChild(maDiv)
    }
}
// demandeCraft = []
// itemNewCraft = null
// function craft(idS) {
//     if (listePlan[idS] != "") {
//         demandeCraft = []
//         document.getElementsByClassName("planCraft")[0].innerHTML = ""
//         for (var i = 1; i < listePlan.length; i++) {
//             if (listePlan[idS][i]) {
//                 demandeCraft.push(listePlan[idS][i].split(";")[2])
//                 var Parent = document.createElement("div");
//                 Parent.className = "casePlanCraftInParent"
//                 Parent.style.top = listePlan[idS][i].split(";")[0]
//                 Parent.style.left = listePlan[idS][i].split(";")[1]
//                 document.getElementsByClassName("planCraft")[0].appendChild(Parent);
//                 var maDiv = document.createElement("img");
//                 maDiv.className = "casePlanCraftIn nonPossede";
//                 maDiv.id = i + 1
//                 maDiv.src = "img/" + listePlan[idS][i].split(";")[2] + ".png"
//                 Parent.appendChild(maDiv)
//                 itemNewCraft = listePlan[idS][0]
//             }
//         }
//         var Parent = document.createElement("div");
//         Parent.className = "validerCraftParent"
//         document.getElementsByClassName("planCraft")[0].appendChild(Parent);
//         var maDiv = document.createElement("img");
//         maDiv.className = "validerCraft";
//         maDiv.onclick = function () {
//             placerCraft()
//         }
//         maDiv.src = "https://www.onlygfx.com/wp-content/uploads/2017/09/grunge-arrow-2-1-1024x823.png"
//         Parent.appendChild(maDiv)
//     }
// }

// function placerCraft() {
//     canCraft = true
//     for (var i = 0; i < demandeCraft.length; i++) {
//         var itemNeed = chercheInv(demandeCraft[i] + ".png")
//         if (itemNeed == false) {
//             canCraft = false
//         } else {
//             document.getElementsByClassName("casePlanCraftIn")[i].className = "casePlanCraftIn"
//         }
//     }
//     if (canCraft == true) {
//         for (var i = 0; i < demandeCraft.length; i++) {
//             var itemNeed = chercheInv(demandeCraft[i] + ".png")
//             prendreInventaire(parseInt(itemNeed.split(" ")[0].split("").slice(0, -4).join("")))
//         }
//         ajoutInventaire3(itemNewCraft)
//         //pour vider la table
//         viderCraft()
//     }
// }

// function viderCraft() {
//     demandeCraft = []
//     document.getElementsByClassName("planCraft")[0].innerHTML = ""
//     demandeCraft = ""    
// }




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