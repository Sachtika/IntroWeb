function btnCalculer_onclick()
{
    var BasePrix, Age, Reduction, Prix, Film, Temps;

    BasePrix=parseFloat(document.getElementById("txtBasePrix").value);
    Age=parseFloat(document.getElementById("txtAge").value);
    Film=document.getElementById("lstOptions").value;

    if (document.getElementById("chkMiSession").checked == true)
    {
        if (Age <= 16) {
            if (document.getElementById("radMidi").checked == true) {
                Temps="midi";
                Reduction = 60;
            }
            else {
                Temps="soir";
                Reduction = 40;
            }
        }

        else {
            if (document.getElementById("radMidi").checked == true) {
                Temps="midi";
                Reduction = 30;
            }
            else {
                Temps="soir";
                Reduction = 0;
            }
        }
    }

    else
        {
            if (document.getElementById("radMidi").checked == true) {
                Temps="midi";
            }
            else
            {
                Temps="soir";
            }
            Reduction = 0;
        }

    Prix=BasePrix-(BasePrix*Reduction)/100;

    document.getElementById("lblMessage").innerHTML="Un billet du " + Temps + " pour un spectateur de " + Age + " ans coûte $" + Prix + " pour le film " + Film;

}