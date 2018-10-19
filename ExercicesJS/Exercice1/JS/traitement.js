function btnCalculer_onclick()
{
    var PoidsLivre, Kg;

    PoidsLivre = parseFloat(document.getElementById("txtLb").value);
 	Kg=(PoidsLivre)/2.2;

    console.log("Le poids en lb convertit en Kg donne: " + Kg + " Kg.");

}