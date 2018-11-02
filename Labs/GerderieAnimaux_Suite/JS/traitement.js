function btnCalculer_onclick()
{ 
 var NbJrs, Tarif, Montant, MontantTaxes, Vet, Srv, SrvToil, Animal, Rabais, HeuresTravail;

 Vet=document.getElementById("lstVeterinaire").value;
 NbJrs=parseFloat(document.getElementById("txtNbreJours").value);
 HeuresTravail=parseFloat(document.getElementById("txtHeuresTravail").value);

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

    switch(HeuresTravail)
    {
        case 25:

            break;

        case 35:

            break;

        case 40:

            break;

        case 45:

            break;
    }






    //Calcul montant
    Montant=(NbJrs*Tarif)+SrvToil;
    Montant=Montant-(Montant/100)*Rabais;
    MontantTaxes=(Montant/100)*14.975+Montant;

    document.getElementById("lblMessage").innerHTML="Vétérinaire responsable est " + Vet + ". Le montant pour la garde de votre " + Animal + " est de $" + MontantTaxes + " pour " + NbJrs + " jours, " + Srv + " service de toilettage.";


}