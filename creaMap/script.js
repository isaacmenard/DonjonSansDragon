image = [];

function check(id) {
    for (var i = 0; i < image.length; i++) {
        if (image[i] == id) {
            return true;
        }
    }
}
palette = "terre";

function lancement() {

    document.getElementById('question4').style.visibility = 'hidden';
    var largeur = document.forms['textee'].elements['largeur'].value,
        number;
    number = parseInt(largeur);
    var largeur = number;
    var hauteur = document.forms['textee'].elements['hauteur'].value,
        number;
    number = parseInt(hauteur);
    var hauteur = number;
    var ligne = largeur;
    var colonne = hauteur;

    creacolonne = 0;
    crealigne = 0;

    while (creacolonne < colonne) {


        var newColonne = document.createElement('tr');

        newColonne.id = 'colonne' + creacolonne;
        var textec = document.createTextNode('');

        newColonne.appendChild(textec);

        document.getElementById("tableau").appendChild(newColonne);



        var newColonne = document.createElement('tr');

        newColonne.id = 'colonneE' + creacolonne;
        var textec = document.createTextNode('');

        newColonne.appendChild(textec);

        document.body.appendChild(newColonne);
        while (crealigne < ligne) {
            var newLigne = document.createElement('td');
            newLigne.className = 'ligne';
            newLigne.id = creacolonne + " " + crealigne;

            newLigne.onmousedown = function add() {
                var texte2 = ["E"];
                var newImage = document.createElement('div');
                newImage.className = palette + " palette";
                newImage.id = "I " + (this.id.split(" ").pop()) + " " + (this.id.split(" ").shift());
   
                if (check(newImage.id) == true) {
                    document.getElementById(newImage.id).className = palette + " palette";
             