function isPalindrome(word){
    let wordArray=[];
    wordArray=word.split('');
    
    let arrayReverse=wordArray.reverse();
    
    wordText=wordArray.toString();
    reverseText=arrayReverse.toString();

    if(word==reverseText){
        return true;
    }
}

let userWord=prompt('inserisci una parola');
console.log(userWord);

let palindromeCheck=isPalindrome(userWord);
console.log(palindromeCheck);
