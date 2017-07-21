// Game of War
// - Start with one deck of cards
// - The deck should be split evenly between four players (each player receives a random assortment)
// - Player should be able to "flip" the top card of their pile and compare against the top card of the other three players.
// - Player with highest suit wins (you decided is Ace is high or low).
// - Winner adds losers hand to their deck. 
// - If two cards of the same suit, those two players draw four cards from the top of their deck and compare the fourth card drawn.
// - Winner takes all eight cards and adds them to the bottom of their deck.
// - Game is won, when 1 player has all of the cards. 

var app = new App();

function App() {
	var deck = newDeck();

	var playerHands = {
		player1: [],
		player2: [],
		player3: [],
		player4: []
	};

	this.shuffleCards = function(deck) {
		for (var i = deck.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = deck[i];
	        deck[i] = deck[j];
	        deck[j] = temp;
	    };
	    return deck;
	};
	
	deck = this.shuffleCards(deck);

	this.showDeck = function() {
		console.log('deck',deck.showDeck());
	};

	this.showHands = function() {
		for(player in playerHands) {
			console.log(playerHands[player])
		}
	}

	this.dealCards = function() {
		for(player in playerHands) {
			var deck_section = deck.splice(0,13);
			playerHands[player].push(deck_section);
		}
	}
}

// Deck 
function newDeck() {
	var suits = ['spades','clubs','diamonds','hearts'];
	var deck = [];

	(function() {
		for(var i = 0; i < suits.length; i++) {
			var suit = suits[i];
			var face;
			for (var j = 1; j <= 13; j++) {
				var card = new Card(j,suit);
				deck.push(card);
			}
		}
	})();

	return deck;
}

// Card Constructor
function Card(num,suit) {
	this.num = num;
	this.suit = suit;
}




// for face selection later
// switch(j) {
// 	case 11:
// 		face = 'jack';
// 		break;
// 	case 12:
// 		face = 'queen';
// 		break;
// 	case 13:
// 		face = 'king';
// 		break;
// }