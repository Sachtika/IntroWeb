var TabJoueur = new Array(4), TabPoints = new Array(4), cpt, cptAfficher, Max, Min, Recherche, txtExist;

cpt=0;
cptAfficher=1;
Max=0;


//Accumulateur= Total=Total+pts; ou Total+=pts;

function btnRechercherJoueur_onclick()
{

    txtExist=false;

    Recherche=parseFloat(document.getElementById("txtNom").value);

    var i;
    for(i=0; i<TabJoueur.length; i++)
    {
        if(Recherche = TabJoueur[i].value)
        {
            txtExist=true;
        }

    }


    if(txtExist=true)
    {
        document.getElementById("lblReponse").innerHTML = "Le nom '" + Recherche + "' existe dans la liste des joueurs.";
    }

    else
    {
        document.getElementById("lblReponse").innerHTML = "Le nom '" + Recherche + "; n'existe pas dans la liste des joueurs.";
    }
}

function btnAjouter_onclick()
{

    if(cptAfficher<4)
    {
        cptAfficher++;
    }


    if(cptAfficher<=4)
        {
            TabJoueur[cpt]=document.getElementById("txtNom");
            TabPoints[cpt]=document.getElementById("txtPoints");
            cpt++;
            document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur "+cptAfficher;
        if(cpt<4)
             {
                document.getElementById("lblReponse").innerHTML = "Le joueur " + cpt + " a été ajouté."
             }
        else
             {
                document.getElementById("btnAjouter").disabled=true;
                document.getElementById("btnRechercher").disabled=false;
                document.getElementById("btnTrouverMoy").disabled=false;
                document.getElementById("btnTrouverMeilleur").disabled=false;
                document.getElementById("btnTrouverPire").disabled=false;
                document.getElementById("lblReponse").innerHTML = "Le joueur " + cpt + " a été ajouté. Nombre maximal de joueur atteint."
             }
        }




}


function btnAfficherMoyenne_onclick()
{

    var Total, i;

    Total=0;

    for( i=0; i<TabPoints.length; i++)
    {
        Total+=TabPoints[i].value;
    }

    Total=(Total)/TabPoints.length;

    document.getElementById("lblReponse").innerHTML="La moyenne est de: " + Total;
}

function AfficherMeilleurPointage_onclick()
{

    var i;
    for(i=0; i<TabPoints.length; i++)
    {
        if(Max<TabPoints[i].value)
        {
            Max=TabPoints[i].value;
        }

    }


    document.getElementById("lblReponse").innerHTML="Le meilleur pointage est de: " + Max;
}

function AfficherPirePointage_onclick()
{

    Min=TabPoints[0].value;

    var i;
    for(i=0; i<TabPoints.length; i++)
    {
        if(Min>TabPoints[i].value)
        {
            Min=TabPoints[i].value;
        }

    }


    document.getElementById("lblReponse").innerHTML="Le pire pointage est de: " + Min;
}