•	Create the Phrase Class in the phrase.js File
Here we will define the Phrase class, which will serve as the blueprint for creating phrase objects.
The class should include a constructor that receives a phrase parameter and initializes the following properties:
o	phrase: this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
The class should also have these methods:
o	addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.
o	checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
o	showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
•	Create the Game Class in the game.js File
Here we will define the Game class, which will be responsible for managing the game's state, logic, and interactions.
The class should include a constructor that initializes the following properties:
o	missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
o	phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
o	activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
The class should also have these methods:
o	startGame(): hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the activePhrase property.
o	getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.
o	handleInteraction(): this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
o	Disable the selected letter’s onscreen keyboard button.
o	If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
o	If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
o	removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
o	checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.
o	gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
•	Update the app.js File
Here we will include event listeners, enabling user interaction with the game, as well as instantiate a new instance of the Game class to initiate the game's functionality.
1.	Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
2.	Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called.
•	Resetting the Gameboard between Games
After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
To reset the game, complete the following steps: * Remove all li elements from the Phrase ul element. * Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes. * Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.
________________________________________
Important Note
These instructions detail what needs to be added to each of three JavaScript files used in the recommended approach to this project. For a more detailed walkthrough of how to complete this project, please refer to the project study guide
•	Finishing the Project
The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.
1.	Code comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code.
2.	Code readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation are consistent.
3.	Quality Assurance Testing - This is the keystone step in the development process.

o	Open and run your app.
o	Open the Chrome DevTools console.
o	Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.
________________________________________
Pro Tip
Before submitting your project it's always a good idea to get an additional pair of eyes on it. This will avoid your project from being returned to you if you missed one of the requirements. You can share a link to your GitHub repository in the #review-my-project channel on Slack and a fellow student or staff member will happily have a look at it.
Extra Credit
To get an "exceeds" rating, complete all of the steps below:
 2 steps
•	Add Keyboard Functionality
Let players use their physical computer keyboard to enter guesses. You'll need to use the keydown or keyup event.
•	Making the Project Your Own
o	The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations, filters, etc.
o	Detail your style changes in your README.md file and in your submission notes.
________________________________________
•	NOTE: Getting an "Exceed Expectations" grade.
o	See the rubric in the "How You'll Be Graded" tab above for details on what you need to receive an "Exceed Expectations" grade.
o	Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
o	Always mention in the comments of your submission or any resubmission, what grade you are going for. Some students want their project to be rejected if they do not meet all Exceeds Expectations Requirements, others will try for all the "exceeds" requirement but do not mind if they pass with a Meets Expectations grade. Leaving a comment in your submission will help the reviewer understand which grade you are specifically going for

