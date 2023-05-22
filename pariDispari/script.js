/*
utente sceglie pari o dispari;
utente inserisce num da 1 a 5;
creo funzione:
  -genera num 1 5;
   -sommo numero utente a  num funzione;
    -se somma=scelta utente,allora Vittoria
     altrimenti 'sconfitta?;
*/ 

let PariDispari=prompt('scegli pari o dispari')

if(PariDispari=='pari'){
    console.log('pari');
}else if(PariDispari=='dispari'){
    console.log('dispari');
}else{
    let PariDispari=prompt('pleasee scegli pari o dispari')
}

let numeroUtente=parseInt(prompt('scegli un numero da 1 a 5'));
 if(numeroUtente>5){
   numeroUtente=parseInt(prompt('scegli un numero da 1 a 5'));
 }

console.log(numeroUtente);

 function numeroComputer(numberPc){
    let numeroPc=Math.floor((Math.random()*5)+1);
    console.log(numeroPc);
 }

 function pariDispari(num1+num2){
    if((num1+num2)%2==0;){
        
    }
 }

