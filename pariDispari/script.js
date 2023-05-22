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
let scelta;
if(PariDispari=='pari'){
    console.log('pari');
    scelta='pari';
}else if(PariDispari=='dispari'){
    console.log('dispari');
    scelta='dispari';
}else{
    let PariDispari=prompt('pleasee scegli pari o dispari')
}

let numeroUtente=parseInt(prompt('scegli un numero da 1 a 5'));
 if(numeroUtente>5){
   numeroUtente=parseInt(prompt('scegli un numero da 1 a 5'));
 }

console.log(numeroUtente);

let numero=Math.floor((Math.random()*5)+1);
console.log(numero);

function numeroComputer(number){ 
    return numero;
 }

 function pariDispari(num1,num2){
    if((num1+num2)%2==0){
        return 'pari';
    }else{
        return 'dispari';
    }
 }

let somma=pariDispari(numeroUtente,numero);

if(somma==scelta){
    console.log('HAI VINTOOO!')
}else{
    console.log('hai perso :(')
}




