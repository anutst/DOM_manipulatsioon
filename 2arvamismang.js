/* Teine ülesanne, arvamismäng
Linki pole, "Number guessing game in Javascript"

const randomNumber = Math.floor(Math.random() * 10) + 1; // Suvaline arv 1-10
let attemptsLeft = 5; // Mitu korda saab proovida

function askGuess() {
  let guess;
  do {
    guess = Number(
      prompt(
        "Arva ära suvaline arv (1 kuni 10). Sul on 5 katset ja siis mäng sulgub:"
      )
    );
  } while (isNaN(guess) || guess < 1 || guess > 10);
  return guess;
}

while (attemptsLeft > 0) {
  let userGuess = askGuess();

  if (userGuess === randomNumber) {
    alert("Õige!");
    break;
  } else if (userGuess > randomNumber) {
    alert("Liiga suur!");
  } else {
    alert("Liiga väike!");
  }

  attemptsLeft--;

  if (attemptsLeft === 0) {
    alert("Mäng läbi. Õige number oli " + randomNumber);
  }
}
  */
