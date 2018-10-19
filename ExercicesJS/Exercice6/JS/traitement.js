function btnCalculer_onclick()
{ 
 	var _1c,_5c, _10c, _25c, Total


    _1c=parseFloat(document.getElementById("txt1").value);
    _5c=parseFloat(document.getElementById("txt5").value);
    _10c=parseFloat(document.getElementById("txt10").value);
    _25c=parseFloat(document.getElementById("txt25").value);

    Total=(0.01*_1c)+(0.05*_5c)+(0.1*_10c)+(0.25*_25c);

    console.log("Le total du montant s'élève à " + Total + "$");


}