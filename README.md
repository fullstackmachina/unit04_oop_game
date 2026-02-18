📝 Phrase Hunter – Object-Oriented JavaScript Game

Treehouse Full Stack JavaScript Techdegree – Unit 04

This project focuses on building a fully interactive browser-based word guessing game using Object-Oriented Programming in vanilla JavaScript. The application separates responsibilities between multiple classes and manages dynamic DOM updates, game state, and user interactions without external libraries.

🔗 Live: https://fullstackmachina.github.io/unit04_phrase_hunter/

📸 Preview image ![alt text](preview_project4.png)

🎯 Project Requirements

Implement the Phrase class:
- Store the phrase in lowercase format
- Display each letter dynamically in the DOM
- Check if a guessed letter exists in the phrase
- Reveal matched letters when correctly guessed

Implement the Game class:
- Track missed guesses
- Store an array of 5 phrase objects
- Randomly select a phrase at game start
- Handle user interaction with the onscreen keyboard
- Remove a life when an incorrect letter is selected
- Detect win condition when all letters are revealed
- Display win/lose overlay screen
- Fully reset game state when starting a new round

Use event delegation:
- Listen for keyboard clicks on a single parent element
- Prevent interaction before game initialization
- Manage dynamic UI updates:
- Disable selected letters
- Apply visual states (chosen, wrong)
- Update heart icons based on remaining lives
- Reset UI elements between games

⭐ Extra Credit Features

Not implemented for this version.
The focus of this project was mastering object-oriented structure, state management, and DOM interaction. Enhancements may be added later as part of portfolio refinement.

🧪 Testing & Quality Assurance

Tested gameplay scenarios:

- Correct letter selections
- Incorrect letter selections
- Full win condition
- Full loss condition (5 missed guesses)
- Game reset after win
- Game reset after loss
- Hearts reset correctly
- Keyboard buttons reset (enabled + class removal)
- Phrase display clears before new round
- Overlay state changes correctly (win / lose)
- No console errors in Chrome DevTools
- Clean and consistent code formatting

🧠 What I Learned in this Unit

 -Structuring applications using Object-Oriented Programming
- Separating responsibilities between classes
- Managing shared state (missed, activePhrase)
- Working with prototypes through ES6 class syntax
- Using event delegation efficiently
- Designing clean reset logic for UI-driven applications
- Implementing win/lose logic without external frameworks
- Thinking in terms of application architecture instead of isolated functions


🛠️ Tech Stack

- JavaScript (ES6 – Classes & DOM API)
- HTML5
- CSS3

🔮 Possible Improvements

- Add physical keyboard support
- Add difficulty levels (more lives / longer phrases)
- Add animations for letter reveal and life loss
- Improve visual styling and transitions
- Add sound effects
- Refactor DOM queries for improved performance
- Add unit tests for core logic methods

