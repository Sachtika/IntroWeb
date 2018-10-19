function btnCalculer_onclick()
{
    var MoyKmMois, TotKm;

    MoyKmMois = parseFloat(document.getElementById("txtKm").value);
    TotKm=MoyKmMois*60;

    console.log("Le total de km calulé pour 5 ans donne: " + TotKm + " Km.");

}