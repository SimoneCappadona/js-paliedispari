const userWord = enterWord();
const invertedWord = reversedWord(userWord);
const Palindrome = palindromeCheck(userWord, invertedWord);
alert("La parola è palindroma?: " + Palindrome);
