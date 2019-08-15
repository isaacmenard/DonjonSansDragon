var $map = $('.table tbody');
var mapPossition = {};
var $tileTemplate = $('body>.tile').remove();
var mapData = map;
mapSize = Math.floor(Math.sqrt(mapData.length));

function getRow(y) {
	if ($map.find('.row-' + y).length > 0) {
		return $map.find('.row-' + y);
	} else {
		return createRow(y);
	}
}

function createRow(y) {
	if (navigator.userAgent) {
		return $('<tr>').addClass('row-' + y + " rowTile").css({
			transform: 'translateY(' + (y * 4 * 16) + 'px)'
		}).appendTo($map);
	} else {
		return $('<tr>').addClass('row-' + y + " rowTile").css({
			transform: 'translateY(' + (y * 4 * 8) + 'px)'
		}).appendTo($map);
	}

}

function getCol(y, x, tile) {
	var $row = getRow(y);
	if ($row.find('.col-' + x).length > 0) {
		return $row.find('.col-' + x);
	} else {
		return createCol(y, x);
	}
}

function createCol(y, x) {
	var $row = getRow(y);
	if (navigator.userAgent) {
		tde = $('<td>').addClass('col-' + x).css({
			transform: 'translateX(' + (x * 4 * 16) + 'px)'
		}).appendTo($row);
	} else {
		tde = $('<td>').addClass('col-' + x).css({
			transform: 'translateX(' + (x * 4 * 8) + 'px)'
		}).appendTo($row);
	}

	tde.attr('id', (x * -1 + " " + 0 + " " + y * -1));
	return tde

}

function getTile(x, y) {
	var $tile = getCol(y, x).find('.tile');
	if ($tile.length > 0) {
		return $tile;
	} else {
		return createTile(x, y, 0);
	}
}

function createTile(x, y, tile) {
	var $tile = getCol(y, x).find('.tile');
	if ($tile.length == 0) {
		$tile = $tileTemplate.clone();
		$tile.css('z-index', (1000 + x + y) * 2);
		$tile.appendTo(getCol(y, x, tile));
	}

	$tile.find('div').removeAttr('class').addClass('tile-' + tile)
	return $tile;

}

function setTile(x, y, tile) {
	var $tile = getTile(x, y);
	$tile.find('div').removeAttr('class').addClass('tile-' + tile);
}

function setTileHeight(x, y, height) {
	var $tile = getTile(x, y);
	$tile.css({
		transform: 'translate3d(' + (height * 16) + 'px, ' + (height * 16) + 'px, 0px)'
	});
}

function hideTile(x, y) {
	getTile(x, y).addClass('hide');
	getTile(x, y).removeClass('showTile');
}

function showTile(x, y) {
	getTile(x, y).addClass('showTile');
	getTile(x, y).removeClass('hide');
}

function toggleTile(x, y) {
	getTile(x, y).toggleClass('hide');
}

function setSize(w, h, tile) {
	for (var y = -h / 2; y < h / 2; y++) {
		for (var x = -w / 2; x < w / 2; x++) {
			createTile(x, y, tile);
		};
	};
}

// function setMapPosition(x, y, animate) {
// 	mapPossition.x = x;
// 	mapPossition.y = y;

// 	$el = $('.table')
// 	$el[(animate) ? 'animate' : 'css']({
// 		left: ((window.innerWidth / 2) - $el.width() / 2) + x,
// 		top: ((window.innerHeight / 2) - $el.height() / 2) + y 
// 	});
// }

function init() {
	//create map
	for (var y = 0; y < mapSize; y++) {
		for (var x = 0; x < mapSize; x++) {
			setTile(x - (mapSize / 2), y - (mapSize / 2), mapData[(y * mapSize) + x])
		};
	};

	var mousePos = {};
	var mapPos = {};
	var dragging = false;
	// $(document).mousedown(function (event) {
	// 	mousePos.x = event.pageX;
	// 	mousePos.y = event.pageY;
	// 	mapPos.x = mapPossition.x;
	// 	mapPos.y = mapPossition.y;
	// 	dragging = true;
	// }).mousemove(function (event) {
	// 	if (dragging) {
	// 		setMapPosition(mapPos.x + (event.pageX - mousePos.x), mapPos.y + (event.pageY - mousePos.y));
	// 	}
	// }).mouseup(function (event) {
	// 	dragging = false;
	// });

	var x = -(mapSize / 2);
	var y = -(mapSize / 2);
	intervalShow = setInterval(ShowTheMap, 20);

	setTimeout(ShowTheItem, 1000)
}

function ShowTheItem() {
	for (var i = 0; i < document.getElementsByClassName("objet").length; i++) {
		document.getElementsByClassName("objet")[i].style.opacity = "1"
	}
}

function hideTheItem() {
	for (var i = 0; i < document.getElementsByClassName("objet").length; i++) {
		document.getElementsByClassName("objet")[i].style.opacity = "0"
	}
}






function ShowTheMap() {
	for (var i = 0; i < 20; i++) {
		var x = Math.floor(Math.random() * mapSize) - (mapSize / 2);
		var y = Math.floor(Math.random() * mapSize) - (mapSize / 2);
		var tile = getTile(x, y);

		if (tile.hasClass('hide')) {
			showTile(x, y);
		}
	};
}

function hideTheMap() {
	clearInterval(intervalShow)
	for (var i = 0; i < 20; i++) {
		var x = Math.floor(Math.random() * mapSize) - (mapSize / 2);
		var y = Math.floor(Math.random() * mapSize) - (mapSize / 2);
		var tile = getTile(x, y);

		if (tile.hasClass('showTile')) {
			hideTile(x, y);
		}
		if (!document.getElementsByClassName("showTile")[0]) {
			document.getElementsByClassName("table")[0].style.opacity = "0"
			clearInterval(intervalHideItem)
			setTimeout(function () {
				document.getElementsByClassName("tbody")[0].innerHTML = "";
				if (document.getElementsByClassName("table")[0].childNodes[2]) {
					document.getElementsByClassName("table")[0].removeChild(document.getElementsByClassName("table")[0].childNodes[2])
				}
			}, 1000);
		}
	};
}

function deleteTheMap() {
	intervalHide = setInterval(hideTheMap, 20);
	intervalHideItem = setInterval(hideTheItem, 100);
}
//start
init();
$(window).trigger('resize');
var LaMap = false
water = [110, 106, 71, 72, 73, 123]
duve = [19, 20, 21]
setTimeout(function () {

	for (var j = ((mapSize / 2) - 1) * -1; j <= mapSize; j++) {

		for (var i = ((mapSize / 2) - 1) * -1; i <= mapSize; i++) {
			if (document.getElementById(i + " 0 " + j)) {
				var canContinue = true
				for (var lmnop = 0; lmnop < antiColision.length; lmnop++) {
					if (document.getElementById(i + " 0 " + j).id == antiColision[lmnop]) {
						canContinue = false
					}
				}
				if(mapCombat == true){
					document.getElementById(i + " 0 " + j).onclick = function () {placerPersonnage(this)}
				}
				if (canContinue == true) {
					for (var m = 0; m < water.length; m++) {
						if (i == Math.round(mapSize / 2) && j == Math.round(mapSize / 2) && LaMap == false) {
							LaMap = true
						}
						// alert(mapSize)
						if (document.getElementById(i + " 0 " + j) && document.getElementById(i + " 0 " + j).getElementsByTagName('div')[0].getElementsByTagName('div')[0].className.split("-").pop() == water[m]) {
							document.getElementById(i + " 0 " + j).id = i + " 2 " + j
							document.getElementById(i + " 2 " + j).getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.transform = "rotateZ(-45deg) rotateY(-60deg) translate3d(-27.6px, -35.8px, -42px)"
						}
					}
					for (var k = 0; k < colision.length; k++) {
						if (document.getElementById(i + " 0 " + j) && document.getElementById(i + " 0 " + j).id == colision[k]) {
							document.getElementById(i + " 0 " + j).id = i + " 1 " + j
						}if(mapCombat == true){
							document.getElementById(i + " 0 " + j).style.visibility = 'hidden'
						}
					}
					for (var m = 0; m < duve.length; m++) {
						if (document.getElementById(i + " 0 " + j) && document.getElementById(i + " 0 " + j).getElementsByTagName('div')[0].getElementsByTagName('div')[0].className.split("-").pop() == duve[m]) {
							document.getElementById(i + " 0 " + j).getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.transform = "rotateZ(-45deg) rotateY(-60deg) translate3d(-64.6px, -80.8px, -44px)"
							document.getElementById(i + " 0 " + j).getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.marginLeft = "10px"
						}
					}
				}
			}
		}

	}
}, 200)



function ajoutMapDb(idMap) {
	var existeMap = false
	for (var i = 0; i < listeMap.length; i++) {
		if (listeMap[i] == idMap) {
			existeMap = true
		}
	}
	if (existeMap == false) {
		openWin("ajoutMapDb.php?map=" + idMap)
	}
}

function ajoutMapDbCombat(idMap, idPlayer,listeMechants) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var idMapCombatOff = this.responseText
			if (idMapCombatOff != "") {
				idMapCombatOff = idMapCombatOff.replace(/'/g, '"');
				idMapCombatOff = JSON.parse(idMapCombatOff);
				idMapCombatOff.push(pseudoPlayer)
				idMapCombatOff = idMapCombatOff.join("','")
				var xmlhttps = new XMLHttpRequest();
				xmlhttps.open("GET", "modifPlayerDb.php?idPlayer=" + idPlayer+ "&enQuoi=\"['" + idMapCombatOff+"']\"&quoi=listeJoueurs", true);
				xmlhttps.send();
				var xmlhttps = new XMLHttpRequest();
				xmlhttps.open("GET", "modifPlayerDb.php?idPlayer=" + idPlayer+ "&enQuoi=\"['" + idMapCombatOff+"']\"&quoi=listeJoueursPlacement", true);
				xmlhttps.send();
			}
		}
	};
	xmlhttp.open("GET", "ajoutCombat.php?map=" + idMap + "&idPlayer=" + idPlayer+ "&qui=['" + pseudoPlayer+"']&mechants="+listeMechants, true);
	xmlhttp.send();
}

function modifAMap(idMap, quoi, enQuoi) {
	openWin("modifMapDb.php?map=" + idMap + "&quoi=" + quoi + "&enQuoi=" + convertirUnDoubleTableau(enQuoi))
}

objetsMap = ""
mechantsMap = ""
itemsMap = ""
function recupMapDb(idMap, quoi) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			if(quoi == "objetsMap"){
				objetsMap = this.responseText
			}else if(quoi == "mechantsMap"){
				mechantsMap = this.responseText
				if(mechantsMap != ""){
					mechantsMap = mechantsMap.replace(/'/g, '"');
					mechantsMap = JSON.parse(mechantsMap);
				}
			}else if(quoi == "itemsMap"){
				itemsMap = this.responseText
			}
		}
	};
	xmlhttp.open("GET", "recupMapDb.php?map=" + idMap + "&quoi=" + quoi, true);
	xmlhttp.send();
}

function convertirUnDoubleTableau(xMap) {
	for (var i = 0; i < xMap.length; i++) {
		xMap[i] = '["' + xMap[i].join('","') + '"]'
	}
	return '[' + xMap.join(',') + ']'
}