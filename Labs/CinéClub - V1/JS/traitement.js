function btnCalculer_onclick()
{ 
   var BasePrix, Age, Reduction, Prix;

    BasePrix=parseFloat(document.getElementById("txtBasePrix").value);
    Age=parseFloat(document.getElementById("txtAge").value);

    if(Age<=16)
    {
        if (document.getElementById("radMidi").checked == true)
        {
            Reduction=60;
        }
        else
        {
            Reduction=40;
        }
    }

    else
    {
        if (document.getElementById("radMidi").checked == true)
        {
            Reduction=30;
        }
        else
        {
            Reduction=0;
        }
    }

    Prix=BasePrix-(BasePrix*Reduction)/100;

    document.getElementById("lblMessage").innerHTML="Le prix d'un billet sera de " + Prix + "$.";

}