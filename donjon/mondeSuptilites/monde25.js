if (selectMap == 25) {
    map = [
        91,	91,	91,	91,	91,	91,
        91,	91,	91,	91,	91,	91,
        91,	91,	91,	91,	91,	91,
        91,	91,	91,	91,	91,	91,
        91,	91,	91,	91,	91,	91,
        91,	91,	91,	91,	91,	91
    ];
    setTimeout(() => {
        addItem("bow", "img/bow.png", 0, 0)
        colision = ["-2 0 1"]
        pnjCreation(-2, 1, "http://pixelartmaker.com/art/ba727526b3c3125.png", "pnj", "Voici un arc Selectionne le avec la touche correspondant au numéro de ta case (par exemple : 2)<br> Puis tire avec les flèches directionnelles<br> Une fois compris, continue à gauche")
    }, 200);
    
}