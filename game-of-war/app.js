// Game of War
// - Start with one deck of cards
// - The deck should be split evenly between four players (each player receives a random assortment)
// - Player should be able to "flip" the top card of their pile and compare against the top card of the other three players.
// - Player with highest suit wins (you decided is Ace is high or low).
// - Winner adds losers hand to their deck.
// - If two cards of the same suit, those two players draw four cards from the top of their deck and compare the fourth card drawn.
// - Winner takes all eight cards and adds them to the bottom of their deck.
// - Game is won, when 1 player has all of the cards.
$(document).ready(function() {
	var app = new App();
	app.init();
	$('#play').on('click', function() {
		console.log('bootay');
		app.playCard();
	});
});

function App() {
	var self = this;

	var deck = Deck();

	var playingField = [];

	var playerDeck = {
		player0: [],
		player1: [],
		player2: [],
		player3: []
	};

	this.init = function() {
		deck = this.shuffleCards(deck);
		this.showDeck();
		this.dealCards();
		this.showHands();
		this.playCard();
	};

	this.shuffleCards = function(deck) {
		for (var i = deck.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = deck[i];
			deck[i] = deck[j];
			deck[j] = temp;
		}
		return deck;
	};

	this.showDeck = function() {
		console.log('constructor showdeck', deck);
	};

	this.showHands = function() {
		for (player in playerDeck) {
			console.log(playerDeck[player]);
		}
	};

	this.dealCards = function() {
		for (player in playerDeck) {
			var deck_section = deck.splice(0, 13);
			playerDeck[player] = [...deck_section];
		}
	};

	this.playCard = function() {
		for (player in playerDeck) {
			var card = playerDeck[player].pop();
			playingField.push(card);
			console.log(`${player}`, 'playerDeck[player]', playerDeck[player]);
			// check card with any current card (playingField))
		}
		console.log('current playingfield', playingField);
		var maxIndex = this.findHighestCard(playingField);
		this.givePlayerCards(maxIndex);
		console.log('playingfield', playingField);
		playingField = [];
		this.showHands();
	};

	this.findHighestCard = function(field) {
		var max = field[0];
		for (var i = 1; i < field.length; i++) {
			if (max.suit < field[i].suit) {
				if (max.num < field[i].num) {
					max = field[i];
				}
			}
		}
		return field.indexOf(max);
	};

	this.givePlayerCards = function(index) {
		var player = `player${index}`;
		playerDeck[player] = [...playerDeck[player], ...playingField];
	};
}

// Deck
function Deck() {
	var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
	var deck = [];

	(function() {
		for (var i = 0; i < suits.length; i++) {
			var suit = suits[i];
			var face;
			for (var j = 1; j <= 13; j++) {
				var card = new Card(j, suit);
				deck.push(card);
			}
		}
	})();

	return deck;
}

// Card Constructor
function Card(num, suit) {
	this.num = num;
	this.suit = suit;
}
