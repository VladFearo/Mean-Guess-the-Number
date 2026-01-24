const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function tempCalc(d) {
  if (d <= 2) return "Scorching.";
  if (d <= 5) return "Hot.";
  if (d <= 10) return "Warm.";
  if (d <= 20) return "Lukewarm.";
  if (d <= 35) return "Cold.";
  return "Freezing.";
}

const secret = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 7;
let currAttempts = 0;
const prevGuesses = [];
console.log(`
    I picked a number between 1 and 100.
    You get 7 attempts.

    Enter a guess or 'q' to quit.
    `);
async function main() {
  let won = false;
  while (currAttempts < maxAttempts) {
    const input = await ask(
      `Guess (attempts left: ${maxAttempts - currAttempts}): `,
    );

    if (input.trim().toLowerCase() === "q") {
      console.log("Ok. Coward.");
      break;
    }

    const guess = Number(input);

    if (Number.isNaN(guess)) {
      console.log("Not a number. Try again.");
      continue;
    } else if (!Number.isInteger(guess)) {
      console.log("Invalid input. Enter a whole number 1–100.");
      continue;
    } else if (guess < 1 || guess > 100) {
      console.log("Out of range. Use 1–100.");
      continue;
    }
    currAttempts++;
    if (guess === secret) {
      const verdict = {
        1: "Sniper",
        2: "Sniper",
        3: "Acceptable",
        4: "Acceptable",
        5: "Acceptable",
        6: "Messy",
        7: "Messy",
      };
      console.log(
        `Correct.\nAttempts used: ${currAttempts}\nVerdict: ${verdict[currAttempts]}`,
      );
      won = true;
      break;
    }

    if (prevGuesses.includes(guess)) {
      console.log("You already tried that. Stop looping.");
      continue;
    } else {
      prevGuesses.push(guess);
    }
    const higherLower = guess > secret ? "Lower." : "Higher.";
    console.log(higherLower);
    const d = Math.abs(secret - guess);
    const temperature = tempCalc(d);
    console.log(temperature);
    console.log(); // empty line for spacing
  }
  if (!won && currAttempts === maxAttempts) {
    console.log(`You lost. The number was ${secret}.
Your guesses: ${prevGuesses.join(", ")}
`);
  }

  rl.close();
}

main();
