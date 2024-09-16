let vitoria =200

let derrotas = 200

  let saldo = SaldoVitorias(vitoria, derrotas)

 if(saldo < 10){
    console.log("O Herói tem de saldo de " + saldo + " está no nível de Ferro");

}       else if (saldo >10 && saldo <= 20)  {
   console.log("O Herói tem de saldo de " + saldo +" está no nível de Bronze ");

   }   else if (saldo > 21 && saldo <= 50)  {
       console.log("O Herói tem de saldo de " + saldo +" está no nível de Prata");

   }    else if (saldo > 51 && saldo <= 80)  {
       console.log("O Herói tem de saldo de " + saldo +" está no nível de Ouro");

   }    else if (saldo > 81 && saldo <= 90)  {
       console.log("O Herói tem de saldo de " + saldo +" está no nível de Diamante");

   }   else if (saldo > 91 && saldo <= 100)  {
       console.log("O Herói tem de saldo de " + saldo +" está no nível de Lendario");  

   }   else { 
          console.log("O Herói tem de saldo de " + saldo +" está no nível de Imortal")  
   }  

function SaldoVitorias(vitoria,derrotas) { 
  var Num1=vitoria - derrotas
  return Num1
}


 