var TabJoueur = new Array(4), TabPoints = new Array(4),cpt, cptAfficher;

cpt=0;
cptAfficher=0;

//Accumulateur= Total=Total+pts; ou Total+=pts;

function btnRechercherJoueur_onclick()
{




    document.getElementById("lblReponse").innerHTML="";

}

function btnAjouter_onclick()
{
    if(cptAfficher<4)
        {
        cptAfficher++;
        TabJoueur[cpt]=document.getElementById("txtNom");
        TabPoints[cpt]=document.getElementById("txtPoints");
        cpt++;
        document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur "+cpt;
        if(cptAfficher<4)
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

    var Total;

    for(i=0; i<TabPoints.Length; i++)
    {
        TabPoints[i]+= TabPoints;


    }

    Total=(TabPoints)/TabPoints.Length;

    document.getElementById("lblReponse").innerHTML="La moyenne est de: " + Total;
}

function AfficherMeilleurPointage_onclick()
{




    document.getElementById("lblReponse").innerHTML="";
}

function AfficherPirePointage_onclick()
{





    document.getElementById("lblReponse").innerHTML="";
}