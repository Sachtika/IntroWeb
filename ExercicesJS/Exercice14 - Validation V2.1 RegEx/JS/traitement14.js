function btnCalculer_onclick()
{
    if(valideChampObligatoire() === true)
    {
        if (valideFormats() === true)
        {
            traiteInfos();
        }
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
    var tabNomId = new Array("txtNbre1", "txtNbre2", "txtOperateur"), valide=true, i;

    for(i=0; i<tabNomId.length; i++)
    {

        if(valideExiste(tabNomId[i])===false)
        {
            valide=false;
        }

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

function valideFormats()
{
    var valide=true;

    if (valideNo(document.getElementById("txtNbre1").value) === false)
    {
        document.getElementById("txtNbre1").style.backgroundColor="red";
        valide = false;
    }
    else
    {
        document.getElementById("txtNbre1").style.backgroundColor="white";
    }

    if (valideNo(document.getElementById("txtNbre2").value) === false)
    {
        document.getElementById("txtNbre2").style.backgroundColor="red";
        valide = false;
    }
    else
    {
        document.getElementById("txtNbre2").style.backgroundColor="white";
    }

    if (valideOp(document.getElementById("txtOperateur").value) === false)
    {
        document.getElementById("txtOperateur").style.backgroundColor="red";
        valide = false;
    }
    else
    {
        document.getElementById("txtOperateur").style.backgroundColor="white";
    }

    return valide;
}

function valideNo(chaine)
{
    return /^[0-9]+$/.test(chaine);
}

function valideOp(chaine)
{
    return /^[-+*/]$/.test(chaine);
}