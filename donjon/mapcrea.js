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
		tde = $('<td>').addClass('col-' + x+' tileMap').css({
			transform: 'translateX(' + (x * 4 * 16) + 'px)'
		}).appendTo($row);
	} else {
		tde = $('<td>').addClass('col-' + x+' tileMap').css({
			transform: 'translateX(' + (x * 4 * 8) + 'px)'
		}).appendTo($row);
	}

	tde.attr('id', (x + " " + 0 + " " + y ));
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

function init() {
	//create map
	for (var y = 0; y < mapSize; y++) {
		for (var x = 0; x < mapSize; x++) {
			setTile(x, y , mapData[(y * mapSize) + x])
		};
	};

	var mousePos = {};
	var mapPos = {};
	var dragging = false;
	var x = (mapSize / 2);
	var y = (mapSize / 2);
	intervalShow = setInterval(ShowTheMap, 100);
}
function ShowTheMap() {
	for (var i = 0; i < 10; i++) {
		var x = Math.floor(Math.random() * mapSize) ;
		var y = Math.floor(Math.random() * mapSize);
		var tile = getTile(x, y);

		if (tile.hasClass('hide')) {
			showTile(x, y);
		}
	};
}
init()

for(var i =0; i < document.getElementsByClassName("tileMap").length;i++){
	document.getElementsByClassName("tileMap")[i].onclick = function(){goHere(this)}
	document.getElementsByClassName("tileMap")[i].onmouseenter = function(){circle(this,0)}
	document.getElementsByClassName("tileMap")[i].onmouseleave = function(){circle(this,1)}
}

// Crée l'événement.
event = document.createEvent('Event');

// Nomme l'événement 'build'.
event.initEvent('buildMap', true, true);
document.dispatchEvent(event);
