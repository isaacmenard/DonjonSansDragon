tp = null
mapGenerale = [
    [[4],[15],[14],[20]],
    [[9],[10],[11],[24]],
    [[8],[23],[21],[2,1,1]],
    [[3,2,3],[19],[18],[0]],
    [[27],[28],[29],[30]]
]
leWorldSelect = []
mapTutoriel = [[[26],[25],[1]]]
mapSolo = [[40, 4, -3],[41, 1, -1],[43, 1, -1],[42, 0, -2],[44, -2, -2],[51, -3, -3],[52, -3, -3]]
positionMapGeneraleExist = false
for(var i = 0;i < mapGenerale.length;i++){
    for(var j = 0; j < mapGenerale[i].length;j++){
        if(mapGenerale[i][j][0] == selectMap){
            positionMapGenerale = (i+";"+j)
            leWorldSelect = mapGenerale
            positionMapGeneraleExist = true
        }
    }
}
if(positionMapGeneraleExist == false){
    for(var i = 0;i < mapTutoriel.length;i++){
        for(var j = 0; j < mapTutoriel[i].length;j++){
            if(mapTutoriel[i][j][0] == selectMap){
                positionMapGenerale = (i+";"+j)
                leWorldSelect = mapTutoriel
                positionMapGeneraleExist = true
            }
        }
    }
}
if(directionUrl == "null" && positionMapGeneraleExist == true||directionUrl == null && positionMapGeneraleExist == true){
    a = leWorldSelect[parseInt(positionMapGenerale.split(";")[0])][parseInt(positionMapGenerale.split(";")[1])][1]
    b = leWorldSelect[parseInt(positionMapGenerale.split(";")[0])][parseInt(positionMapGenerale.split(";")[1])][2]
    if(a == undefined){
        a = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
        b = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
    }
}
else if(positionMapGeneraleExist == false){

    for(var i = 0; i < mapSolo.length;i++){
        if(mapSolo[i][0] == selectMap){
            a = mapSolo[i][1]
            b = mapSolo[i][2]
        }
    }
    if(a == undefined){
        a = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
        b = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
    }
}
else{
    if(directionUrl == "haut"){
        a = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
        b = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
        directionUrl = "bas"
    }
    else if(directionUrl == "bas"){
        a = parseInt((mapSize) - (mapSize / 2))
        b = parseInt((mapSize) - (mapSize / 2))
        directionUrl="haut"
    }
    else if(directionUrl == "gauche"){
        a = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
        b = parseInt((mapSize) - (mapSize / 2))
        directionUrl = "droite"
    }
    else if(directionUrl == "droite"){
        a = parseInt((mapSize) - (mapSize / 2))
        b = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
        directionUrl="gauche"
    }
}
if(directionUrl != null){
    tpA(directionUrl)
}
mondeTp()
function tpA(direction){
    if(positionMapGeneraleExist == true){
        y = parseInt(positionMapGenerale.split(";")[0])
        x = parseInt(positionMapGenerale.split(";")[1])
        if(direction == "haut" && y-1 >= 0 && leWorldSelect[y-1][x] != null){
            tp = leWorldSelect[y-1][x]
        }
        else if(direction == "bas" && y+1  < leWorldSelect.length && leWorldSelect[y+1][x] != null){
            tp =leWorldSelect[y+1][x]
        }
        else if(direction == "gauche" && x-1 >= 0 && leWorldSelect[y][x-1] != null){
            tp =leWorldSelect[y][x-1]
        }
        else if(direction == "droite" && x+1  < leWorldSelect[y].length && leWorldSelect[y][x+1] != null){
            tp =leWorldSelect[y][x+1]
        }
        if(tp != null){
            if(mechantDead.length == mechantLoot.length){
                arrowMap(direction)
            }
        }
    }
}

function arrowMap(direction){
    if(direction == "haut"){
        document.getElementById("arrowMap").style.visibility = "visible"
        document.getElementById("arrowMap").style.transform = "rotate(-90deg)"
    }
    else if(direction == "bas"){
        document.getElementById("arrowMap").style.visibility = "visible"
        document.getElementById("arrowMap").style.transform = "rotate(90deg)"
    }
    else if(direction == "gauche"){
        document.getElementById("arrowMap").style.visibility = "visible"
        document.getElementById("arrowMap").style.transform = "rotate(-180deg)"
    }
    else if(direction == "droite" && selectMap != 0){
        document.getElementById("arrowMap").style.visibility = "visible"
        document.getElementById("arrowMap").style.transform = "rotate(0deg)"
    }
}
function changementDeMap(){
    openWin("monde.php?map="+tp)
    closeWinMonde()
}
document.getElementById("arrowMap").style.visibility = "hidden"
function mondeTp() {
    tp = null
    document.getElementById("arrowMap").style.visibility = "hidden"
    if(Math.round(((mapSize) - (mapSize / 2))/2)+" 0 "+Math.round(((mapSize) - (mapSize / 2))/2) == (Math.round(a/2) + " " + 0 + " " + Math.round(b/2))){
        tpA("haut")
        directionNow = "haut"
    }
    if(Math.round(((mapSize) - (mapSize / 2))/2)+" 0 "+Math.round((((mapSize) - (mapSize / 2)-1)*-1)/2) == (Math.round(a/2) + " " + 0 + " " + Math.round(b/2))){
        tpA("gauche")
        directionNow = "gauche"
    }
    if(Math.round((((mapSize) - (mapSize / 2)-1)*-1)/2)+" 0 "+ Math.round(((mapSize) - (mapSize / 2))/2) == (Math.round(a/2) + " " + 0 + " " + Math.round(b/2))){
        tpA("droite")
        directionNow="droite"
    }
    if(Math.round((((mapSize) - (mapSize / 2)-1)*-1)/2)+" 0 "+ Math.round((((mapSize) - (mapSize / 2)-1)*-1)/2) == (Math.round(a/2) + " " + 0 + " " + Math.round(b/2))){
        tpA("bas")
        directionNow="bas"
    }

}