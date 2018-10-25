function btnCalculer_onclick()
{ 
 	var BilEn, BilEtu, BilAin, BilAd, NbBil, Escompte, Prix;

	BilEn=parseFloat(document.getElementById("txtEn").value);
	BilEtu=parseFloat(document.getElementById("txtEtu").value);
	BilAd=parseFloat(document.getElementById("txtAd").value);
	BilAin=parseFloat(document.getElementById("txtAi").value);

	NbBil=BilEtu+BilAd+BilAin;

    BilEtu=BilEtu*12;
    BilAd=BilAd*20;
    BilAin=BilAin*15;

	Prix=BilEtu+BilAd+BilAin;

	Escompte=(Prix*0.1);
	if(NbBil >= 5)
	{
		Prix=Prix-Escompte;
	}
	else
	{}

    console.log("Le prix total de l'achat des billets est de: " + Prix + "$");


}