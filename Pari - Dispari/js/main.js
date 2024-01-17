let userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5"));

while (userNumber > 5 || userNumber < 1) {
  userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5"));
}
const computerRndNumber = getRndNumber(1, 5);
console.log(userNumber, computerRndNumber);

const numbersAddition = userNumber + computerRndNumber;

const additionResult = isPariOrDispari(numbersAddition);
console.log(numbersAddition, additionResult);

if (userNumber === additionResult) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}
