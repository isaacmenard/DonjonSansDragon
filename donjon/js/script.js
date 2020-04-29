
openWin("php/changePos.php?pos='" + (posActuX + " 0 " + posActuY) + "'")
//  Écoute l'événement.
document.addEventListener('buildMap', function (e) {
  document.getElementById(posActuY + " 0 " + posActuX).appendChild(perso)
}, false);
setInterval(function () {
  if (movements != []) {
    movements = goHereAnim(movements, perso, posActuX, posActuY)
  }
}, 500)
setInterval(function () {
  document.getElementById("map").style.left = (posActuY - Math.sqrt(map.length) / 2) * -64 + "px"
  document.getElementById("map").style.top = (posActuX - Math.sqrt(map.length) / 2) * -64 + "px"
}, 1000)

function circle(elementS, idKey) {
  if (idKey == 0) {
    elementS.appendChild(circleE)
  } else {
    if (circleE.parentElement == elementS) {
      elementS.removeChild(circleE)
    }
  }
}

function goHereAnim(dep, element, startX, startY, check) {
  if (dep && dep.length > 0 && deplacement == "walk") {
    element.style.marginLeft = "0px"
    var arraySelect = dep[0]
    if (element.parentElement == document.getElementById(arraySelect[1] + " 0 " + arraySelect[0])) {
      arraySelect = dep[1]
    }
    if (arraySelect == undefined) {
      return false
    }
    dep.splice(0, 1)
    if (startY < arraySelect[1]) {
      setTimeout(function () {
        element.style.marginLeft = "30px"
        setTimeout(function () {
          element.style.transition = "0s"
          element.style.marginLeft = "-30px"
          document.getElementById(arraySelect[1] + " 0 " + arraySelect[0]).appendChild(element)
          setTimeout(function () {
            element.style.transition = "0.25s"
            element.style.marginLeft = "0px"
          }, 10)
        }, 250)
      }, 10)
    } else if (startY > arraySelect[1]) {
      setTimeout(function () {
        element.style.marginLeft = "-30px"
        setTimeout(function () {
          element.style.transition = "0s"
          element.style.marginLeft = "30px"
          document.getElementById(arraySelect[1] + " 0 " + arraySelect[0]).appendChild(element)
          setTimeout(function () {
            element.style.transition = "0.25s"
            element.style.marginLeft = "0px"
          }, 10)
        }, 250)
      }, 10)
    } else if (startX < arraySelect[0]) {
      setTimeout(function () {
        element.style.marginTop = "30px"
        setTimeout(function () {
          element.style.transition = "0s"
          element.style.marginTop = "-30px"
          document.getElementById(arraySelect[1] + " 0 " + arraySelect[0]).appendChild(element)
          setTimeout(function () {
            element.style.transition = "0.25s"
            element.style.marginTop = "0px"
          }, 10)
        }, 250)
      }, 10)
    } else if (startX > arraySelect[0]) {
      setTimeout(function () {
        element.style.marginTop = "-30px"
        setTimeout(function () {
          element.style.transition = "0s"
          element.style.marginTop = "30px"
          document.getElementById(arraySelect[1] + " 0 " + arraySelect[0]).appendChild(element)
          setTimeout(function () {
            element.style.transition = "0.25s"
            element.style.marginTop = "0px"
          }, 10)
        }, 250)
      }, 10)
    }
    if (element == perso) {
      posActuY = arraySelect[1]
      posActuX = arraySelect[0]
      openWin("php/changePos.php?pos='" + (posActuX + " 0 " + posActuY) + "'")
    } else if (check != undefined) {
      listePlayerAvant[check][1] = [arraySelect[0], arraySelect[1]]
    }
    return dep
  } else if (deplacement == "tp") {
    if (dep && dep.length > 0) {
      var legt = dep.length - 1
      document.getElementById(dep[legt][1] + " 0 " + dep[legt][0]).appendChild(element)
      if (element == perso) {
        posActuY = dep[legt][1]
        posActuX = dep[legt][0]
        openWin("changePos.php?pos='" + (posActuX + " 0 " + posActuY) + "'")
      } else if (check != undefined) {
        listePlayerAvant[check][1] = [dep[legt][0], dep[legt][1]]
      }
    }
  }
}

function goHere(elementS) {
  var finder = new PF.AStarFinder();
  var grid = selectCollision(new PF.Grid(Math.sqrt(map.length), Math.sqrt(map.length)));
  movements = (finder.findPath((posActuX), (posActuY), parseInt(elementS.id.split(" ")[2]), parseInt(elementS.id.split(" ")[0]), grid))
}

function find(startX, startY, endX, endY) {
  var finder = new PF.AStarFinder();
  var grid = selectCollision(new PF.Grid(Math.sqrt(map.length), Math.sqrt(map.length)));
  var mouvements = (finder.findPath((startX), (startY), endX, endY, grid))
  mouvements.shift()
  return mouvements
}

function selectCollision(mapS) {
  for (var i = 0; i < map.length; i++) {
    if (map[i] == 110) {
      var y = Math.ceil(i / Math.sqrt(map.length)) - 1
      var x = i - (y * (Math.sqrt(map.length)))
      mapS.setWalkableAt(y, x, false);
    }
  }
  return mapS
}

function getPosition(element) {
  var left = 0;
  var top = 0;
  /*On récupère l'élément*/
  var e = element;
  /*Tant que l'on a un élément parent*/
  while (e.offsetParent != undefined && e.offsetParent != null) {
    /*On ajoute la position de l'élément parent*/
    left += e.offsetLeft + (e.clientLeft != null ? e.clientLeft : 0);
    top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
    e = e.offsetParent;
  }
  return new Array(left, top);
}

function openWin(lien) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", lien, true);
  xmlhttp.send();
}
setInterval(updateServer, 1000)

function updateServer() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      listePlayerPos = (this.responseText).split("||||")
      for (var i = 0; i < listePlayerPos.length; i++) {
        listePlayerPos[i] = listePlayerPos[i].split("$$$$")
        movePlayer(listePlayerPos[i][0], listePlayerPos[i][1], listePlayerPos[i][2])
      }
    }
  };
  xmlhttp.open("GET", "php/positionPlayers.php", true);
  xmlhttp.send();
}

function movePlayer(position, pseudo, id) {
  //met en forme position
  position = position.split("'").join("").split("").splice(1)
  position[position.length - 1] = ""
  position = position.join("")

  if (id != idPErso) {
    var check = false
    var ident = false
    for (var i = 0; i < listePlayerAvant.length; i++) {
      if (listePlayerAvant[i][0] == id) {
        check = listePlayerAvant[i]
        ident = i
      }
    }
    if (check != false) {
      goHereAnim(find(
          check[1][0],
          check[1][1],
          position.split(" ")[0],
          position.split(" ")[2]
        ), document.getElementById("joueurAvecId" + id), check[1][0],
        check[1][1], ident)
    } else {
      var newPerso = document.createElement("div")
      newPerso.id = "joueurAvecId" + id
      newPerso.className = "personnage"
      var imgNewPerso = document.createElement("img")
      imgNewPerso.className = "perso"
      imgNewPerso.src = "img/srill_face.png"
      var newPseudo = document.createElement("div")
      newPseudo.className = "pseudo"
      newPseudo.innerHTML = pseudo
      newPerso.appendChild(newPseudo)
      newPerso.appendChild(imgNewPerso)
      document.getElementById(position).appendChild(newPerso)
      listePlayerAvant.push([id, [position.split(" ")[0], position.split(" ")[2]]])
    }
  }
}
