function enterWord() {
    let inputWord;
    while (!inputWord) {
      inputWord = prompt("Inserisci una parola, verificherò se è palindroma");
    }
    return inputWord;
  }

  function reversedWord(word) {
    let invertedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      invertedWord += word[i];
    }
    return invertedWord.toLowerCase();
  }

  function palindromeCheck(theWord, invertedWord) {
    let Palindrome = true;
    for (let i = 0; i < theWord.length && Palindrome; i++) {
      if (theWord[i] != invertedWord[i]) Palindrome = false;
    }
    return Palindrome;
  }