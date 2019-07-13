tp = null
mapGenerale = [
    [[4],[15],[14],[20]],
    [[9],[10],[11],[24]],
    [[8],[23],[21],[2,1,1]],
    [[3,2,3],[19],[18],[0],[26],[25],[1]]
]
for(var i = 0;i < mapGenerale.length;i++){
    for(var j = 0; j < mapGenerale[i].length;j++){
        if(mapGenerale[i][j][0] == selectMap){
            positionMapGenerale = (i+";"+j)
        }
    }
}
if(directionUrl == "null"||directionUrl == null){
    a = mapGenerale[parseInt(positionMapGenerale.split(";")[0])][parseInt(positionMapGenerale.split(";")[1])][1]
    b = mapGenerale[parseInt(positionMapGenerale.split(";")[0])][parseInt(positionMapGenerale.split(";")[1])][2]
    if(a == undefined){
        a = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
        b = parseInt(((mapSize) - (mapSize / 2)-1)*-1)
    }
}else{
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
    y = parseInt(positionMapGenerale.split(";")[0])
    x = parseInt(positionMapGenerale.split(";")[1])
    if(direction == "haut"){
        tp = mapGenerale[y-1][x]
    }
    else if(direction == "bas"){
        tp =mapGenerale[y+1][x]
    }
    else if(direction == "gauche"){
        tp =mapGenerale[y][x-1]
    }
    else if(direction == "droite"){
        tp =mapGenerale[y][x+1]
    }
    if(tp != null){
        if(mechantDead.length == mechantLoot.length){
<<<<<<< HEAD
=======
            console.log("vous pouvez aller dans le monde"+tp)
>>>>>>> 58f82a5c43abd9e65ba3bfdbc8945b13f43a94ea
            arrowMap(direction)
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