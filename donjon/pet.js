if(pet.length > 0){
    var petSrc = pet[0][0]
    var petName = pet[0][1]
    var petClass = pet[0][2]

    petParent = document.createElement("div");
    petParent.className = "parent"+petClass
    document.getElementById(a + " " + 0 + " " + b).appendChild(petParent);
    pet = document.createElement("img");
    pet.className = "pnj "+petClass
    pet.src = petSrc
    pet.appendChild(petParent);
}
function addAPet(src,name,petClass){
    if(pet.typeof != Object){
        pet = [[src, name, petClass]]
    }else{
        pet[0].push(src)
        pet[1].push(name)
        pet[2].push(petClass)
    }
    miseAJourPet()
}
function miseAJourPet() {
    var petResult = "['" + pet.join("','") + "']"
    openWin("quest.php?quest=" + petResult)
    setTimeout(closeWin, 100)
}