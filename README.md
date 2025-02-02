# Minesweeper

A simple **Minesweeper** game built with **React** and **Vite**. The game allows users to input the number of mines, interact with a dynamically generated minefield, and track their score. The game ends when a player clicks on an explosive mine.

## Features

- **Dynamic Minefield**: Users can specify the number of mines to generate a customizable grid.

- **State Management**: Uses  `useState` for handling game state and score updates.

- **Performance** Optimization: Utilizes `useMemo` and `useCallback` to optimize memory usage and prevent unnecessary re-renders.

- **Alert System**: Uses `useEffect` with `useRef` to display an alert when the number of mines changes, but prevents the alert from appearing on the first render.

## Technologies Used

- React

- Vite

- JavaScript (ES6+)

- CSS

## Installation & Setup

Clone the repository:

`git clone https://github.com/yourusername/minesweeper.git
cd minesweeper`

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

## Components Overview

- **`App.jsx`**: Manages game state and renders child components.

- **`Title.jsx`**: Displays the game title.

- **`Input.jsx`**: Allows users to input the number of mines.

- **`CurrentScore.jsx`**: Displays the player's current score.

- **`MineField.jsx`**: Generates the mine grid dynamically.

- **`Mine.jsx`**: Represents an individual mine with click handling logic.

## Game Logic

Clicking a **safe** mine increases the score.

Clicking an **explosive** mine triggers a game over state.

The game dynamically updates the minefield based on user input.

## Optimizations

- **`useMemo`** is used in `MineField.jsx` to prevent unnecessary recalculations when generating the minefield.

- **`useCallback`** optimizes functions like `addScore` and `changeHandler` to avoid redundant re-renders.

- **`useRef`** ensures that the alert message ("Good luck!") does not appear on the initial render.

## Future Enhancements

Add a restart button.

Implement different difficulty levels.

Improve UI/UX with animations.
