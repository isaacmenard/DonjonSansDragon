if(pet.length > 0){
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
    
}
function addAPet(src,name,petClass){
    pet = [src, name, petClass]
    var petSrc = pet[0]
    var petName = pet[1]
    var petClass = pet[2]
if(document.getElementsByClassName("ThePet")[0]){
    document.getElementsByClassName("ThePet")[0].parentNode.removeChild(document.getElementsByClassName("ThePet")[0])
}
    var Pet = document.createElement("img");
    Pet.src = petSrc
    Pet.className = "pnj "+petClass
    var divPet = document.createElement("div");
    divPet.className = "ThePet"
    document.getElementById(a+" 0 "+b).appendChild(divPet)
    divPet.appendChild(Pet)
    miseAJourPet()
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