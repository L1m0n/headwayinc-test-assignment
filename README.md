## 🚀 Live Demo

[Play the game here](https://headwayinc-test-assignment-jwuq.vercel.app/)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **State Management**: Zustand
- **Styling**: CSS Modules
- **Package Manager**: pnpm
- **Linting**: ESLint + Airbnb config
- **Testing**: Jest + React Testing Library

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/headwayinc-test-assignment.git
   cd headwayinc-test-assignment
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Game Rules

1. **Start the Game**: Click "Start" on the home page
2. **Answer Questions**: Select the correct answer(s) from the options provided (some questions has more then 1 correct answer)
3. **Progress**: Correct answers advance you to the next question
4. **Game Over**: Wrong answers or 12 correct end the game and show your total winnings 


## 🎮 Game Configuration

The game is fully configurable through JSON files. All configuration is stored in the `src/data/` directory.

### `src/data/questions.json`
Contains all game questions with their options and metadata:

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "level": 1,
    "question": "How old your elder brother was 10 years before you was born, mate?",
    "correctAnswers": 1,
    "options": [
      { "id": "A", "text": "10 years" },
      { "id": "B", "text": "11 years" },
      { "id": "C", "text": "12 years" },
      { "id": "D", "text": "14 years" }
    ]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440004",
    "level": 4,
    "question": "Which countries share a border with Germany?",
    "correctAnswers": 4,
    "options": [
      { "id": "A", "text": "France" },
      { "id": "B", "text": "Poland" },
      { "id": "C", "text": "Italy" },
      { "id": "D", "text": "Austria" },
      { "id": "E", "text": "Switzerland" }
    ]
  }
]
```

### `src/data/levels.json`
Defines the prize structure and currency:

```json
{
  "currency": "USD",
  "symbol": "$",
  "levels": [
    { "level": 12, "amount": 1000000 },
    { "level": 11, "amount": 500000 },
    { "level": 10, "amount": 250000 },
    { "level": 9, "amount": 125000 },
    { "level": 8, "amount": 64000 },
    { "level": 7, "amount": 32000 },
    { "level": 6, "amount": 16000 },
    { "level": 5, "amount": 8000 },
    { "level": 4, "amount": 4000 },
    { "level": 3, "amount": 2000 },
    { "level": 2, "amount": 1000 },
    { "level": 1, "amount": 500 }
  ]
}
```

### `src/data/correct-answers.json`
Contains the correct answers for each question (server-side only):

```json
{
  "550e8400-e29b-41d4-a716-446655440001": ["C"],
  "550e8400-e29b-41d4-a716-446655440002": ["B"],
  "550e8400-e29b-41d4-a716-446655440003": ["B"],
  "550e8400-e29b-41d4-a716-446655440004": ["A", "B", "D", "E"],
  "550e8400-e29b-41d4-a716-446655440005": ["B"],
  "550e8400-e29b-41d4-a716-446655440006": ["C"],
  "550e8400-e29b-41d4-a716-446655440007": ["A"],
  "550e8400-e29b-41d4-a716-446655440008": ["C"],
  "550e8400-e29b-41d4-a716-446655440009": ["B"],
  "550e8400-e29b-41d4-a716-446655440010": ["C"],
  "550e8400-e29b-41d4-a716-446655440011": ["A", "B"],
  "550e8400-e29b-41d4-a716-446655440012": ["A"]
}
```

## 🔒 Security Features

### Server-side Validation
The game includes a secure validation system to prevent cheating:

- **API Route**: `/api/game/validate` handles all answer validation
- **Server-side Only**: Correct answers are never exposed to the client
- **Anti-cheat Protection**: Players cannot inspect the browser to find correct answers
- **Secure Validation**: All validation logic runs on the server
