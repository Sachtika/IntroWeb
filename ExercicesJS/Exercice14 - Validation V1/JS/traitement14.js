


function btnCalculer_onclick()
{
    if(valideChampObligatoire() === true)
    {
        traiteInfos();
    }
}

function traiteInfos()
{
    var Nbre1,Nbre2,Symbole,Res;

    Nbre1=parseFloat(document.getElementById("txtNbre1").value);
    Nbre2=parseFloat(document.getElementById("txtNbre2").value);
    Symbole=document.getElementById("txtOperateur").value;

    Res=calculer(parseFloat(document.getElementById("txtNbre1").value),parseFloat(document.getElementById("txtNbre2").value),document.getElementById("txtOperateur").value);


    document.getElementById("lblMessage").innerHTML="Le résultat est de " + Res;
}


function calculer(Nbre1,Nbre2,Symbole)
{
    switch (Symbole)
    {
        case "+":
            Res=Nbre1+Nbre2;
            break;

        case "-":
            Res=Nbre1-Nbre2;
            break;
        case "/":
            Res=Nbre1/Nbre2;
            break;

        case "*":
            Res=Nbre1*Nbre2;
            break;

    }

    return Res;
}

function valideChampObligatoire()
{
    var valide = false;

    if(valideExiste("txtNbre1")===true && valideExiste("txtNbre2")===true && valideExiste("txtOperateur")===true)
    {
        valide=true;
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