if(pet.length > 0){
    setTimeout(() => {
        majPetClient() 
    }, 200)
}
function addAPet(src,name,petClass, aliment1,aliment2,aliment3,aliment4){
    pet = [src, name, petClass, 0, 0, 100, aliment1,aliment2,aliment3,aliment4]
    miseAJourPet()
}
function majPetClient(){
    if(document.getElementsByClassName("ThePet")[0]){
        document.getElementsByClassName("ThePet")[0].parentNode.removeChild(document.getElementsByClassName("ThePet")[0])
    }
    var petSrc = pet[0]
    var petName = pet[1]
    var petClass = pet[2]
    var Pet = document.createElement("img");
    Pet.src = petSrc
    Pet.className = "pnj "+petClass
    var divPet = document.createElement("div");
    divPet.className = "ThePet"
    document.getElementById(a+" 0 "+b).appendChild(divPet)
    divPet.appendChild(Pet)
    document.getElementsByClassName("petInfoCanEat")[0].innerHTML = ""
    listeCanEat = []
    listeCanEat.push(pet[6])
    listeCanEat.push(pet[7])
    listeCanEat.push(pet[8])
    listeCanEat.push(pet[9])
        for (var i = 0; i < listeCanEat.length; i++) {
                var Parent = document.createElement("div");
                Parent.className = "casePetParent"
                document.getElementsByClassName("petInfoCanEat")[0].appendChild(Parent);
                if( listeCanEat[i] != ""){
                    if (chercheInv(listeCanEat[i] + ".png") != false) {
                        var maDiv = document.createElement("img");
                        maDiv.className = "valider";
                        maDiv.id = i + "imgVal"
                        maDiv.src = "img/valider.png"
                        Parent.appendChild(maDiv)
                        var maDiv = document.createElement("br");
                        Parent.appendChild(maDiv)
                        var maDiv = document.createElement("img");
                        maDiv.className = "casePet";
                    }else{
                        var maDiv = document.createElement("br");
                        Parent.appendChild(maDiv)
                        var maDiv = document.createElement("img");
                        maDiv.className = "casePet nonPossede";
                    }
                   
                    maDiv.id = i + "imgPet"
                    maDiv.src = "img/" + listeCanEat[i] + ".png"
                    Parent.appendChild(maDiv)
                }
                itemNew = listeCanEat[i]
        }
    document.getElementsByClassName("petImg")[0].innerHTML = "<img src='"+petSrc+"' class='petImgSrc'>"
}
function removePet(name){
    for(var i = 0; i < pet.length;i++){
        if(pet[i][1] == name){
            pet.splice(i, 1);
        }
    }
    miseAJourPet()
}
function miseAJourPet() {
    var petResult = "['" + pet.join("','") + "']"
    openWin("pet.php?pet=" + petResult)
    setTimeout(closeWin, 100)
}
petInterfaceOpen = false
function petInterface(){
    if(petInterfaceOpen == false){
        document.getElementsByClassName("pet")[0].style.visibility = "visible"
        petInterfaceOpen = true
        document.getElementsByClassName("inventaire")[0].style.visibility = "hidden"
    }else{
        document.getElementsByClassName("pet")[0].style.visibility = "hidden"
        petInterfaceOpen = false
        document.getElementsByClassName("inventaire")[0].style.visibility = "visible"
    }
}