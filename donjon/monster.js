  monsterList = []
  readyVar = false

  function generateMonster(src, vie, dammage, range, pos) {
    var monster = []
    monster['id'] = monsterList.length
    monster['vie'] = vie
    monster['dammage'] = dammage
    monster['range'] = range
    var monsterElement = document.createElement("img")
    monsterElement.src = src

    if (combat == -1) {
      monsterElement.onclick = function () {
        startFight(this.id.split("-")[0],vie)
      }
    }
    monsterElement.id = monster['id'] + "-Monster"
    monsterElement.className = "monster"
    document.getElementById(pos).appendChild(monsterElement)
    monsterList.push([monster])
  }

  if (combat == -1) {
    // JavaScript Document

    function startFight(id,vie) {
      interval = setInterval(function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("salonText").innerHTML = (this.responseText)
            document.getElementById("salon").style.visibility = "visible"
          }
        };
        xmlhttp.open("GET", "salonMonster.php?id=" + id + "&statue=" + 0+"&life="+vie, true);
        xmlhttp.send();

        if (document.getElementById("canGo")) {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET", "setCombatMonster.php?combat=" + 1, true);
          xmlhttp.send();
          xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              window.location = ""
            }
          };
        }
      }, 1000)
      setTimeout(function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "readySalonMonster.php?statue=" + 0, true);
        xmlhttp.send();
      }, 1000)
      readyVar = false
      ready()
    }

    function go() {
      alert("hey")
    }

    function ready() {
      // 1 = prêt / 0 = pas prêt
      if (readyVar == false) {
        document.getElementById("textPanelSalon").innerHTML = "Cliquez sur \" I'm not ready \" pour commencer ! "
        document.getElementById("ready").innerHTML = "I'm not READY"
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "readySalonMonster.php?statue=" + "-1", true);
        xmlhttp.send();
        readyVar = true
      } else {
        document.getElementById("textPanelSalon").innerHTML = "En attente des autres joueurs "
        document.getElementById("ready").innerHTML = "I'm READY !"
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "readySalonMonster.php?statue=" + 1, true);
        xmlhttp.send();
        readyVar = false
      }
    }

    function leave() {
      clearInterval(interval)
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", "leaveSalonMonster.php", true);
      xmlhttp.send();
      document.getElementById("salon").style.visibility = "hidden"
    }


  } else {
    document.getElementById("textPanelSalon").innerHTML = "CHOISIR VOTRE EMPLACEMENT"
    document.getElementById("ready").innerHTML = "FAIT !"
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "readySalonMonster.php?statue=" + "-1", true);
    xmlhttp.send();

    function leave() {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", "leaveSalonMonster.php", true);
      xmlhttp.send();
      document.getElementById("salon").style.visibility = "hidden"
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          window.location = ""
        }

      }
    }

    interval = setInterval(function () {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          listeJoueurs =  (this.responseText)
		  document.getElementById("salonText").innerHTML = listeJoueurs
          document.getElementById("salon").style.visibility = "visible"
        }
      };
      xmlhttp.open("GET", "salonMonster.php?id=" + combat + "&statue=" + "1", true);
      xmlhttp.send();
      if (document.getElementById("canGo")) {
		  clearInterval(interval)
        startFight()
      }
    }, 1000)


    function ready() {
      // 1 = prêt / 0 = pas prêt
      if (readyVar == true) {
        document.getElementById("textPanelSalon").innerHTML = "CHOISIR VOTRE EMPLACEMENT"
        document.getElementById("ready").innerHTML = "FAIT !"
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "readySalonMonster.php?statue=" + "-1", true);
        xmlhttp.send();
        readyVar = true
      } else {
        document.getElementById("textPanelSalon").innerHTML = "En attente des autres joueurs "
        document.getElementById("ready").innerHTML = "ATTEND J'AI CHANGé D'AVIS !"
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "readySalonMonster.php?statue=" + 1, true);
        xmlhttp.send();
        readyVar = false
      }
    }
  }

  function startFight() {
    setTurn()
  }

  function setTurn() {
	  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "setTurn.php", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        next(this.responseText.split(","))

      }
    };

    function next(turn) {
      document.getElementById("textPanelSalon").innerHTML = "C'est votre Tour"
      document.getElementById("ready").innerHTML = "FINI !"
		
		interval = setInterval(function () {
				refreshLife()
		  var xmlhttp = new XMLHttpRequest();
		  xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
			  listeJoueurs =  (this.responseText)
				listeJoueurs= listeJoueurs.split("</p>").map(x => x.split("--")[0])
			  document.getElementById("salonText").innerHTML =  listeJoueurs
			  document.getElementById("salon").style.visibility = "visible"
			}
		  };
		  xmlhttp.open("GET", "salonMonster.php?id=" + combat + "&statue=" + "1", true);
		  xmlhttp.send();
		}, 1000)
    }
	  function refreshLife(){
		  var xmlhttp = new XMLHttpRequest();
		  xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
			  lifeMonster =  (this.responseText)
				document.getElementById("lifeMonster").style.visibility = "visible";
				document.getElementById("lifeMonster").innerHTML = lifeMonster+" PV"
			}
		  };
		  xmlhttp.open("GET", "lifeSalonMonster.php", true);
		  xmlhttp.send();
	  }
  }
