class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("..."),
      new Phrase("..."),
      new Phrase("..."),
      new Phrase("..."),
      new Phrase("..."),
    ];
    this.activePhrase = null;
  }

  startGame() {
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

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  handleInteraction(button) {
    // Désactive le bouton
    const letter = button.textContent;
    button.disabled = true;
    // si la lettre est dans la phrase, ajouter la class chosen et showMatchedLetter()
    if (this.activePhrase.checkLetter(letter)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letter);
    } else {
      // si la lettre est pas dans la phrase removeLife()
      button.classList.add("wrong");
      this.removeLife();
    }

    if (this.checkForWin()) {
      this.gameOver(true);
    }
  }

  removeLife() {
    const lives = document.querySelectorAll("#scoreboard img");
    lives[this.missed].src = "images/lostHeart.png";
    this.missed++;

    if (this.missed === 5) {
      this.gameOver(false);
    }
  }
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
