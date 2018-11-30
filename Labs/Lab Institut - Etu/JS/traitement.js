function frmMembre_onclick()
{ var Valide= true;
    if(valideChampsObligatoires() === true)
    {
        if (valideFormats() === true) {

            traiteInfos();

            if (confirm("Voulez-vous vraiment créer votre inscription?") === true)
            {
                Valide= true;
            }

            else
                {
                    Valide= false;
                }
        }
    }

    else
    {
        Valide = false;
        document.getElementById("lblMessageErreur").innerHTML="Tout les champs ayant une étoile sont obligatoires.";
    }

    return Valide;
}

function traiteInfos()
{
    //var categorie, prix;

    //catégorie=document.getElementById()

}

function valideChampsObligatoires()
{
    var tabId = new Array("txtNom", "txtPrenom", "txtAdresse","txtVille","txtTel"), valide=true, i;

    for(i=0; i<tabId.length; i++)
    {

        if(valideExiste(tabId[i])===false)
        {
            valide=false;
        }

    }

    return valide;

}


function valideExiste(Id)
{
    var valide;

    //if(document.getElementById(Id).value == "")
    if (document.getElementById(Id).value === "")
    {
        valide=false;
        document.getElementById(Id).style.borderColor="red";
    }
    else
    {
        valide=true;
        document.getElementById(Id).style.borderColor="white";
    }
    return valide;
}

function valideFormats()
{
    var valide=true;

    if (valideCar(document.getElementById("txtNom").value) === false)
    {
        document.getElementById("txtNom").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtNom").style.borderColor="white";
    }

    if (valideCar(document.getElementById("txtPrenom").value) === false)
    {
        document.getElementById("txtPrenom").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtPrenom").style.borderColor="white";
    }

    if (valideAdresse(document.getElementById("txtAdresse").value) === false)
    {
        document.getElementById("txtAdresse").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtAdresse").style.borderColor="white";
    }

    if (valideCar(document.getElementById("txtVille").value) === false)
    {
        document.getElementById("txtVille").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtVille").style.borderColor="white";
    }

    if (valideCodePostal(document.getElementById("txtCodePostal").value) === false && document.getElementById("txtCodePostal").value  !== "")
    {
        document.getElementById("txtCodePostal").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtCodePostal").style.borderColor="white";
    }

    if (valideTel(document.getElementById("txtTel").value) === false)
    {
        document.getElementById("txtTel").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtTel").style.borderColor="white";
    }

    if (valideCodePerm(document.getElementById("txtCodePerm").value) === false && document.getElementById("txtCodePerm").value  !== "")
    {
        document.getElementById("txtCodePerm").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtCodePerm").style.borderColor="white";
    }


    return valide;
}

function valideCar(chaine)
{
    return /^[A-z]+[-]?[A-z]+$/.test(chaine);
}

function valideAdresse(chaine)
{
    return /^[0-9]+[ ]?[A-z]+[ ]?[A-z]+$/.test(chaine);
}

function valideCodePostal(chaine)
{
    return /^[A-z][0-9][A-z][ ]?[0-9][A-z][0-9]$/.test(chaine);
}

function valideTel(chaine)
{
    return /^[0-9]{3}-[0-9]{3}-[0-9]{4}|[(][0-9]{3}[)][ ][0-9]{3}-[0-9]{4}$/.test(chaine);
}

function valideCodePerm(chaine)
{
    return /[A-z]{4}[0-9]{8}/.test(chaine);
}