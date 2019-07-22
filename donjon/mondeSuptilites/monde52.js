if (selectMap == 52) {
    map = [
        13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,
13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,
13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,
13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,	13 ,
13,	13 ,	13 ,	13 ,	34 ,	34,	34 ,	34 ,
13 ,	13 ,	13 ,	13,	34 ,	34 ,	34 ,	34 ,
13 ,	13 ,	13 ,	13 ,	34 ,	34 ,	34 ,	34 ,
13 ,	13 ,	13 ,	13 ,	34 ,	34 ,	34 ,	34 
    ];
    setTimeout(() => {
        pnjCreation(4, 4, "img/roi.png", "pnj roi ", ["Sorteeezzz de mon chateauuuuu !", "a +", null, null, null, 1, 11])
        document.body.style.backgroundColor = "rgb(251, 121, 121)"
        deltaTimeG = 2000;
        intervalMechant = setInterval(mechant, deltaTimeG);
        mechantCreation(3, -2, 6, 50, 0, 2000, ["I_SilverBar", "img/I_SilverBar.png"], 50, 1,"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7ea57772-dffe-47f8-b909-251efff7db00/d9cweny-24fb1369-79ef-4925-a54d-31923a5dd128.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdlYTU3NzcyLWRmZmUtNDdmOC1iOTA5LTI1MWVmZmY3ZGIwMFwvZDljd2VueS0yNGZiMTM2OS03OWVmLTQ5MjUtYTU0ZC0zMTkyM2E1ZGQxMjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kLZqpiv8_aKywWo3ZhzIE1-wBVzOpQNY1HfQZJkvhw0")
    }, 200);
}