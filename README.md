# Mean Guess the Number

A small, intentionally unforgiving terminal game written in Node.js.

The program picks a number between **1–100**. You get **7 attempts**.  
Mistakes are punished. Repeats are punished harder.

## Run

```bash
node meanGuessTheNumber.js
```

Node.js v16+ recommended.

## Rules

- Guess a whole number between **1–100**
- Type `q` to quit (case-insensitive)
- Invalid input does **not** consume attempts
- Repeated guesses **do** consume attempts and give no hints

## Feedback

After a valid new guess:

- You are told **Higher.** or **Lower.**
- You receive a distance-based temperature hint:
  - 1–2 → Scorching.
  - 3–5 → Hot.
  - 6–10 → Warm.
  - 11–20 → Lukewarm.
  - 21–35 → Cold.
  - 36+ → Freezing.

## End states

- **Win** → attempts used + verdict
- **Quit** → immediate exit
- **Out of attempts** → number revealed + guess history

### Verdicts

- 1–2 → Sniper
- 3–5 → Acceptable
- 6–7 → Messy
