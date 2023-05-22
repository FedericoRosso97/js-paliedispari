function isPalindrome(word){
    let wordArray=[];
    wordArray.push(word);
    wordArray=word.split('');
    
    let arrayReverse=wordArray.reverse();
    
    wordText=wordArray.toString();
    reverseText=arrayReverse.toString();

    if(wordText===reverseText){
        return true;
    }else{
        return false;
    }
}

let userWord=prompt('inserisci una parola');
console.log(userWord);

let palindromeCheck=isPalindrome(userWord);
console.log(palindromeCheck);
