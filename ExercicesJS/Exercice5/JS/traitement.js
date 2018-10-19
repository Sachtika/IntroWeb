function btnCalculer_onclick()
{ 
 	var Rev, Loy, Nour, Depl, Reste

    Rev=parseFloat(document.getElementById("txtRev").value);
    Loy=parseFloat(document.getElementById("txtLoy").value);
    Nour=parseFloat(document.getElementById("txtNour").value);
    Depl=parseFloat(document.getElementById("txtDepl").value);

    Reste=(Rev-Loy-Nour-Depl)/(52/12);

    console.log("Il reste un motant de " + Reste + "$ pour les dépenses personelles.");

}