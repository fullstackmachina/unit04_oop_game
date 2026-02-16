class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase ul");
    ul.innerHTML = "";
    for (let character of this.phrase) {
      let li = document.createElement("li");
      if (character === " ") {
        li.classList.add("space");
      } else {
        li.classList.add("hide", "letter", character);
        li.textContent = character;
      }
      ul.appendChild(li);
    }
  }
  checkLetter(letter) {
    return this.phrase.includes(letter.toLowerCase());
  }
}
