const Reverseastring = (str) => {
let words = str.split(" "); /* turn to words */
let sentence ="";
for ( let i=words.length-1 ; i>=0 ; i--) /* (words.length-1) لانه ال index ببلش من 0  */
    {
sentence = sentence + words[i] +" " ; 
}
return sentence.trim(" "); /* turn words to one sentence */  
/* join used for arrays and trim used for strinf*/
}

console.log(Reverseastring("Hello my nam is nour "))


