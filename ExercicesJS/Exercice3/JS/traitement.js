function btnCalculer_onclick()
{
    var Argent_Can, TauxChangeEuro, Euro;

    Argent_Can = parseFloat(document.getElementById("txtArg").value);
    TauxChangeEuro = parseFloat(document.getElementById("txtTaux").value);

    Euro=Argent_Can*TauxChangeEuro;

    console.log("Voici le montant d'euros que vous pouvez avoir pour votre argent canadien: " + Euro);

}