}
};
            var textec = document.createTextNode('');
            //On ins�re le texte dans notre ligne
            newLigne.appendChild(textec);
            /*On ins�re finalement notre �l�ment en tant que
             *dernier enfant de body (auquel on acc�de directement
             *avec "document.body", tout simplement)*/
            document.getElementById("colonne" + creacolonne).appendChild(newLigne);








            //CREATION TABLEAU ECRIT
            var newLigne = document.createElement('td');
            //On ajoute un attribut id � notre colonne
            newLigne.className = 'ligneE';
            newLigne.id = "E " + creacolonne + " " + crealigne;

            var textec = document.createTextNode(' ,');
            if (crealigne == ligne - 1) {
                var textec = document.createTextNode(' ,');
            }
            if (crealigne == ligne - 1 && creacolonne == colonne - 1) {
                var textec = document.createTextNode(' ');
            }
            //On ins�re le texte dans notre ligne
            newLigne.appendChild(textec);
            /*On ins�re finalement notre �l�ment en tant que
             *dernier enfant de body (auquel on acc�de directement
             *avec "document.body", tout simplement)*/
            document.getElementById("colonneE" + creacolonne).appendChild(newLigne);



            crealigne += 1;
        }
        crealigne = 0;
        creacolonne = creacolonne + 1;
    }
}
