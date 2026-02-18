const startOrReset = document.getElementById("btn__reset");
const keyboardInteractions = document.getElementById("qwerty");

let game;

startOrReset.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

keyboardInteractions.addEventListener("click", (e) => {
  if (e.target.classList.contains("key")) {
    game.handleInteraction(e.target);
  }
});
