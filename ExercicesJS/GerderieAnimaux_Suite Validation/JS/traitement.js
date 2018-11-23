function btnCalculer_onclick()
{
    if(valideChampObligatoire() === true)
    {
        traiteInfos();
    }
}

function btnAfficherImg_onclick()
{
    if (document.getElementById("radChien").checked == true)
    {
        document.getElementById("imageAnimaux").src="img/chien.jpg";
    }
    else
    {
        document.getElementById("imageAnimaux").src="img/chat.jpg";
    }
}



function traiteInfos()
{
    var NbJrs, Tarif, Montant, MontantTaxes, Vet, Srv, SrvToil, Animal, Rabais, Taux, PrixVet;

    Vet=document.getElementById("lstVeterinaire").value;
    NbJrs=parseFloat(document.getElementById("txtNbreJours").value);

    if(NbJrs<=5)
    {
        Rabais=0;
    }
    else if(NbJrs>5 && NbJrs<=10)
    {
        Rabais=5;
    }
    else if(NbJrs>10 && NbJrs<=30)
    {
        Rabais=10;
    }
    else
    {
        Rabais=15;
    }

    if(document.getElementById("chkServ").checked == true)
    {
        SrvToil=5;
        Srv="avec";
    }
    else
    {
        SrvToil=0;
        Srv="sans";
    }



    if (document.getElementById("radChien").checked == true)
    {
        Animal="chien";
        Tarif=18.50;
    }
    else
    {
        Animal="chat";
        Tarif=16.95;
    }

    switch(Vet)
    {
        case "Audrey Bouchard":
            Taux=25;
            break;

        case "Stéphane Tremblay":
            Taux=35;
            break;

        case "Maxime Simard":
            Taux=40;
            break;

        case "Mélissa Caron":
            Taux=45;
            break;
    }

    PrixVet=Taux*2;

    //Calcul montant
    Montant=(NbJrs*Tarif)+SrvToil;
    Montant=Montant-(Montant/100)*Rabais;
    MontantTaxes=(Montant/100)*14.975+Montant+PrixVet;

    document.getElementById("lblMessage").innerHTML="Vétérinaire responsable est " + Vet + ". Le montant pour la garde de votre " + Animal + " est de $" + MontantTaxes + " pour " + NbJrs + " jours, " + Srv + " service de toilettage.";

}

function valideChampObligatoire()
{
    var tabNomId = new Array("txtNom", "txtTel", "txtNbreJours"), valide=true, i;

    for(i=0; i<tabNomId.length; i++)
    {

        if(valideExiste(tabNomId[i])===false)
        {
            valide=false;
        }

    }

    return valide;
}

function valideExiste(nomId)
{
    var valide;

    if(document.getElementById(nomId).value==="")
    {
        valide=false;
        document.getElementById(nomId).style.backgroundColor="red";
    }
    else
    {
        valide=true;
        document.getElementById(nomId).style.backgroundColor="white";
    }
    return valide;
}