// Step 1a - Select and store the gameboard element
var gameboardEle = document.getElementById("gameboard");
// Step 1b - Select and store the score element
var scoreEle = document.getElementById("score");
// Step 1c - Select and store the cards element
var cardsEle = document.getElementById("cards");
// Step 1d - Select and store the message element
var messageEle = document.getElementById("message");

// Step 2 - Create an array of cards
const cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var deck = [];

// Step 2a - Create a function to shuffle the deck
function shuffleDeck() {
    // Step 2b - Create a placeholder array
    var placeholder = [];

    // Step 2c - Iterate through card values 4 times
    var i = 0;
    do {
        // Step 2d - Using a conditional loop
        for (var j = 0; j < cardValues.length; j++) {
            
            // Step 2e - Select a random card from the array
            var randomCard = cardValues[Math.floor(Math.random() * 13)];
            deck.push(randomCard);
        }
        i++;
    } while (i < 4);

}

// Step 2g - Call the shuffleDeck function
shuffleDeck();

// Step 3a - Create an array to store 2 players
var players = ["Player 1", "Player 2"];

// Step 3b - Create a variable to store the current player
var currentPlayer = players[0];

// Step 3c - Create a variable to store the first selected card
var currentCard;

// Step 4 - Iterate through the deck and bind a click event to each one
for (var j = 0; j < deck.length; j++) {
    // Step 4a - Create a new div element to be a card

    var cardEle = document.createElement("div");

    // Step 3b - Add a 'card' class to the class list on the new div element
    cardEle.setAttribute("class", "card");

    // Step 3c - Add a data value to the card with the card's value in it
    cardEle.setAttribute("card-value", deck[j]);
    cardEle.innerText = deck[j];
    // Step 3c - Bind the cardSelected function
    // to the click event on the cardEle
    cardEle.addEventListener("click", cardSelected);
    cardsEle.appendChild(cardEle);
}
// Step 5 - Create a function to store the logic
// for when a card is selected
function cardSelected(event) {
    // Step 5a - Check if there is already a card selected
    if (currentCard) {
        // Step 6 - Compare the cards
        if (currentCard != event.target) {
            // Step 6b - Add a class to the 2 card elements
            // flipping them over
            event.target.classList.add('flipped');
            currentCard.classList.remove('flipped');
            // Step 6c - Add a point to the score for this player
            scoreEle.innerText = parseInt(scoreEle.innerText) + 1;

            // Step 6d - Tell the player to go again
            // (use string interpolation to show which player you're addressing)
            messageEle.innerText = `Congratulations! ${currentPlayer}, please go again!`;
        } else {
            // Step 6e - Provide a fail message to the player
            messageEle.innerText = "Oh, so sorry!!! But yer' not psychic!";

            // Step 6f - Using a ternary, change players
            currentPlayer = currentPlayer == players[0] ? players[1] : players[0];

            // Step 6g - Concatenate a message to the message element
            // advising player 2 that it's their turn now
            // (use string interpolation to show which player you're addressing)
            messageEle.innerText += `${currentPlayer}, your turn!`;
        }
    } else {
        // Step 5b - Assign the card to currentCard
        currentCard = event.target;

        // Step 5c - Tell the player to select another card
        // (use string interpolation to show which player you're addressing)
        messageEle.innerText = `${currentPlayer}, please select another card`;
    }
}
//   Step 7 - Check if the board is full
//  if (document.querySelector(`.flipped`) === 52){
//    // Step 7a - Check if one of the players has won
//    if (playerScore[0] > playerScore[1]) {
//      // Step 7b - Tell the player they've won
//      // (use string interpolation to show which player you're addressing)
//      message.textContent = `${player[0]}, you won!!! Congratulations!`;
//        } else if(playerScore[1] > playerScore[0]) {
//      // Step 7c - Tell the players that the game has ended in a tie
//      message.textContent = `${player[0]},you won`;
//        } else {
//        		message.textContent = `it's a tie`;
//        }
//    }
// }

// Take it further - Reset the board allowing the user to play again (Worth 20% of the final grade)
/*
  Step 1 - You will need a reset button in index.html
 
  Step 2 - You will need to bind an event listener
           that detects the click and executes a function

  Step 3 - You will need to reset all the pieces on the
           board
  Step 4 - You will need to reset the messages
  Step 5 - You will need to reset the players
*/

document.getElementById("reset")
    .addEventListener("click", function (event) {
        window.location.reload();
})
