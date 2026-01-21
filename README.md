# Mean Guess the Number

A tiny terminal game written in Node.js.

The program picks a number between **1–100**. You have **7 attempts** to guess it. The feedback is intentionally blunt.

## Run

```bash
node meanGuessTheNumber.js
```

Node.js v16+ recommended.

## Rules

- Guess a number between **1–100**
- Type `q` to quit (case-insensitive)
- Invalid input does **not** consume attempts
- Repeated guesses **do** consume attempts

## End states

- Win → attempts used + verdict
- Quit → immediate exit
- Out of attempts → game ends

### Verdicts

- 1–2 → Sniper
- 3–5 → Acceptable
- 6–7 → Messy

## Status

Playable core loop. No polish, no persistence, no dependencies. This is a small, sealed CLI exercise.
