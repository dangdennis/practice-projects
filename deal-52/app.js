$(document).ready(function() {
	let game = null;
	game = new Deal52();
	game.showDeck();
});

function Deal52() {
	var self = this;
	this.init = function() {
		this.createPlayers(numPlayers);
		this.deck = this.shuffleCards(this.deck);
		this.dealCards();
		console.log('player hands', this.playerHands);
		this.playCard();
		console.log('table', this.table);
	};

	this.playRound = function() {
		// play cards
		// discard cards to discard pile
		// draw cards
		// repeat til deck is clear
		// count total score in hand
		// lowest player wins
	};

	var rounds = 15;
	var numPlayers = 2;
	this.deck = Deck();
	this.playerHands = {};
	this.table = [];
	this.discardPile = [];

	this.createPlayers = function(numPlayers) {
		for (let i = 0; i < numPlayers; i++) {
			const name = `player${i}`;
			self.playerHands[name] = [];
			console.log('self.playerHands', self.playerHands);
		}
	};

	this.dealCards = function() {
		for (player in self.playerHands) {
			var hand = self.deck.splice(0, 3);
			self.playerHands[player].push(hand);
		}
	};

	this.playCard = function() {
		for (player in self.playerHands) {
			for (let i = 0; i < self.playerHands.length; i++) {
				let highestCard = self.playerHands[i];
				if (highestCard.num < self.playerHands[i].num) {
					highestCard = self.playerHands[i];
				}
				console.log('highestcard', highestCard);
				self.table.push(highestCard);
			}
		}
		console.log('table', self.table);
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
		console.log('deck', this.deck);
	};

	this.showHands = function() {
		for (player in playerHands) {
			console.log(playerHands[player]);
		}
	};

	this.init();
}

// Deck
function Deck() {
	var suits = ['spades', 'clubs', 'diamonds', 'hearts'];
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
