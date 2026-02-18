class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("i love poutine"),
      new Phrase("zelda ocarina of time"),
      new Phrase("coding is cool"),
      new Phrase("i am a developer"),
      new Phrase("genshin is complicated"),
    ];
    this.activePhrase = null;
  }

  startGame() {
    // Reset game state and UI for a fresh round
    document.getElementById("overlay").style.display = "none";
    this.missed = 0;
    const lives = document.querySelectorAll("#scoreboard img");
    lives.forEach((live) => {
      live.src = "images/liveHeart.png";
    });
    const letterButtons = document.querySelectorAll(".key");
    letterButtons.forEach((letterButton) => {
      letterButton.disabled = false;
      letterButton.classList.remove("chosen", "wrong");
    });
    document.querySelector("#phrase ul").innerHTML = "";
    // Start the game by select and displaying a phrase
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  // Keep phrase selection separate from UI logic
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  handleInteraction(button) {
    // Update UI + game state based on whether the guess is correct
    const letter = button.textContent;
    button.disabled = true;
    if (this.activePhrase.checkLetter(letter)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letter);
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }

    if (this.checkForWin()) {
      this.gameOver(true);
    }
  }

  removeLife() {
    // Remove one life and update the scoreboard
    const lives = document.querySelectorAll("#scoreboard img");
    lives[this.missed].src = "images/lostHeart.png";
    this.missed++;
    // End the game after 5 missed guesses
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  // Player wins when there are no hidden letters left
  checkForWin() {
    const hiddenLetters = document.querySelectorAll("#phrase .hide");
    return hiddenLetters.length === 0;
  }

  gameOver(win) {
    const overlay = document.getElementById("overlay");
    const message = document.getElementById("game-over-message");
    overlay.style.display = "flex";

    if (win) {
      overlay.className = "win";
      message.textContent = "Great job! You won!";
    } else {
      overlay.className = "lose";
      message.textContent = "Sorry, better luck next time!";
    }
  }
}
