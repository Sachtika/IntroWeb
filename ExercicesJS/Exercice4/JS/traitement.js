function btnCalculer_onclick()
{ 
 	var Destination, Distance, ConsomVoiture, PrixLitre, Cout;

 	Destination=parseFloat(document.getElementById("txtDest").value);
    Distance=parseFloat(document.getElementById("txtDis").value);
    ConsomVoiture=parseFloat(document.getElementById("txtCon").value);
    PrixLitre=parseFloat(document.getElementById("txtPri").value);
    Cout=(Distance/ConsomVoiture)*PrixLitre;

    console.log("Cela coûtera " + Cout + "$ pour aller à votre destination.");


}