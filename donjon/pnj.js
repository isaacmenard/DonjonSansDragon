//modele message : "texte" $"question1"$"question2"... $ �"reponse1"�"reponse2"...
pnjArr = 0
dialo = 0
//question : tableau; dialogue : string;
function pnjCreation(aPnj, bPnj, src, name, dialogue,vue) {
    dialo = 0
    if (pnjArr == 0) {
        pnj = document.createElement("div");
        pnj.className = "Thepnj"
        document.getElementById(aPnj + " " + 0 + " " + bPnj).appendChild(pnj);
        pnj2 = document.createElement("img");
        pnj2.className = name
        pnj2.src = src
        pnj.appendChild(pnj2);
        if(vue == undefined){
            vue = 1
        }
    }
    var cyclePnj = setInterval(function (){
        if (questionEnCours != true) {
            //bas
            if (aPnj <= a && a - aPnj <= vue && bPnj <= b && b - bPnj <= vue) {
                LancementQuestion()
            }
            //haut
            else if (aPnj > a && aPnj - a < vue && bPnj >= b && bPnj - b <= vue) {
                LancementQuestion()
            }
    
            //droite
            else if (aPnj >= a && aPnj - a <= vue && bPnj <= b && b - bPnj <= vue) {
                LancementQuestion()
            }
            //centre
            else if (aPnj == a && b == bPnj) {
                LancementQuestion()
            }
            //gauche
            else if (aPnj <= a+vue && a - aPnj <= vue && bPnj >= b && bPnj - b <= vue) {
                LancementQuestion()
            }
    
            function LancementQuestion() {
                if (typeof (dialogue) == "object") {
                    var quest = chercheQuest(dialogue[6])
                    if (quest == null) {
                        question(dialogue[0], dialogue[1], dialogue[2], dialogue[3], dialogue[4], dialogue[5], dialogue[6])
                    } else {
                        var element1 = parseInt(quest.split("_").slice(0, 1))
                        var element2 = quest.split("_").slice(1, 2)
                        //converti A en string
                        if (element2 == "A") {
                            element2 = "A"
                        }
                        if (element2 == "B") {
                            element2 = "B"
                        }
                        if (element2 == "C") {
                            element2 = "C"
                        }
                        if (element2 == "D") {
                            element2 = "D"
                        }
                        SuiteQuestion(element2, element1, dialogue[6])
                    }
                }else{
                    dialogues(dialogue)
                }
            }
        }
    }, 1000);

}



function chercheQuest(quest) {
    for (var i = 0; i < quete.length; i++) {
        var Travail = quete[i]
        Travail = Travail.split(":").slice(0, 1)
        if (Travail == quest) {
            return quete[i].split(":").slice(1, 2).join("")
        }
    }
    return null
}

function chercheQuest2(quest) {
    for (var i = 0; i < quete.length; i++) {
        var Travail = quete[i]
        Travail = Travail.split(":").slice(0, 1)
        if (Travail == quest) {
            return i
        }
    }
    return null
}
