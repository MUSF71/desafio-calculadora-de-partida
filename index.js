let vitoria =200
let derrotas = 80

 SaldoVitorias(vitoria, derrotas)

function SaldoVitorias(vitoria,derrotas) { 
  let Num1=vitoria-derrotas;
  return Num1
}

if(SaldoVitorias < 10){
     console.log("O Herói tem de saldo de " + SaldoVitorias +" está no nível de Ferro");

}       else if (SaldoVitorias >10 && SaldoVitorias < 20)  {
    console.log("O Herói tem de saldo de " + SaldoVitorias +" está no nível de Bronze ");

    }   else if (SaldoVitorias > 21 && SaldoVitorias < 50)  {
        console.log("O Herói tem de saldo de " + SaldoVitorias +" está no nível de Prata");

    }    else if (SaldoVitorias > 51 && SaldoVitorias < 80)  {
        console.log("O Herói tem de saldo de " + SaldoVitorias +" está no nível de Ouro");

    }    else if (SaldoVitorias > 81 && SaldoVitorias < 90)  {
        console.log("O Herói tem de saldo de " + SaldoVitorias +" está no nível de Diamante");

    }   else if (SaldoVitorias > 91 && SaldoVitorias < 100)  {
        console.log("O Herói tem de saldo de " + SaldoVitorias +" está no nível de Lendario");  

    }   else { 
           console.log("O Herói tem de saldo de " + SaldoVitorias +" está no nível de Imortal")  
    }  
 