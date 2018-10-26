function btnCalculer_onclick()
{ 
 var NbJrs, Tarif, Montant, MontantTaxes, Vet, Srv, SrvToil, Animal

 Vet=document.getElementById("lstVeterinaire").value;
 NbJrs=parseFloat(document.getElementById("txtNbreJours").value);


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

    Montant=(NbJrs*Tarif)+SrvToil;
    MontantTaxes=(Montant/100)*14.975+Montant;

    console.log("Vétérinaire responsable est " + Vet + ". Le montant pour la garde de votre " + Animal + " est de " + MontantTaxes + " pour " + NbJrs + " jours, " + Srv + " service de toilettage.");


}