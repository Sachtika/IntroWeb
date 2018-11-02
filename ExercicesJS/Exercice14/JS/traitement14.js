function btnCalculer_onclick()
{ 
    var Nbre1, Nbre2, Op, Res;

    Nbre1=parseFloat(document.getElementById("txtNbre1").value);
    Nbre2=parseFloat(document.getElementById("txtNbre2").value);
    Op=document.getElementById("txtOperateur").value;

   switch (Op)
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

    document.getElementById("lblMessage").innerHTML="Le résultat est de " + Res;
}