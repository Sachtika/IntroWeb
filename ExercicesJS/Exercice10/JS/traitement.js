function btnCalculer_onclick()
{ 
 	var Age, Categorie;

    Age=parseFloat(document.getElementById("txtAge").value);

    if ((Age>=6)&&(Age<9))
    {
        Categorie="Poussin";
    }
    else if ((Age>=9)&&(Age<11))
    {
        Categorie="Pupille";
    }
    else if ((Age>=11)&&(Age<13))
    {
        Categorie="Minime";
    }
    else
    {
        Categorie="Cadet";
    }

    document.getElementById("lblMessage").innerHTML="La categorie est: " + Categorie;

}