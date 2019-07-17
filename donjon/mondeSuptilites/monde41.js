if (selectMap == 41) {
    map = [
        110 ,	110 ,	110 ,	110 ,	110 ,	110 ,	110 ,	110 ,
110 ,	110 ,	110 ,	55 ,	55 ,	110,	110 ,	110 ,
110 ,	110 ,	55 ,	55 ,	55 ,	55 ,	110 ,	110 ,
110 ,	55 ,	55 ,	55 ,	55 ,	55 ,	55 ,	110 ,
110 ,	55 ,	55 ,	55 ,	55 ,	55 ,	55 ,	110 ,
110 ,	110 ,	55 ,	55 ,	55 ,	55 ,	110 ,	110 ,
110 ,	110 ,	110 ,	55 ,	55 ,	110 ,	110 ,	110 ,
110 ,	110 ,	110 ,	110 ,	110 ,	110 ,	110 ,	110 
    ];
    window.onload = function () {
        colision=["2 0 1", "1 0 1"]
        pnjCreation(-1   , 1, "img/hippocamp.png", "pnj",  ["Que fais-tu ici ?", "Heuuu Je cherche un Llama ?", null, null, null, 1, 8])
        addObject("pont", "img/prison.png", -345, -140)
    }
}