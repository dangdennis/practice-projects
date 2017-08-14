$(document).ready(function() {
	var app = null;
	app = new Game();
	console.log('app running');
	app.selectHole(4);
});

function Game() {
	var self = this;
	this.board = new Board();
	this.hand = 0;

	this.currentPlayer = 0; // 1;

	this.selectHole = function(position) {
		console.log('selecting hole');
		var stones = self.board.arrangement[self.currentPlayer][position];
		if (!stones) {
			console.log('select another position with stones');
			return;
		}
		console.log('numStones for position ' + position + ': ' + stones);
		self.moveStones(position);
	};

	// Grab stones, empty hole
	this.grabStones = function(position) {
		console.log('grabbing stones');
		self.hand = self.board.arrangement[self.currentPlayer][position];
		self.board.arrangement[self.currentPlayer][position] = 0;

		console.log('mah hand', self.hand);
	};

	// Strictly move stones, place one per hole, without rule checking
	this.moveStones = function(position) {
		self.grabStones(position);
		startingPosition = position + 1;
		console.log('startingPos:', startingPosition);
		for (var i = startingPosition; i < self.board.arrangement[self.currentPlayer].length; i++) {
			if (self.hand !== 0) {
				console.log('num stones left:', self.hand);
				// if (self.currentPlayer === 0 && self.board.arrangement[1] //// && i === 0) {
				// 	continue;
				// } else if (self.currentPlayer === 1 && self.board.arrangement[0] === 0 && i === 0) {
				// 	continue;
				// } else {
				// 	// Remove stone from hand
				self.hand--;
				// Add stone to hole
				self.board.arrangement[self.currentPlayer][i]++;
				// }
				// Check for player 1, add stones in player 1 store only
				if (i === self.board.arrangement[self.currentPlayer].length - 1) {
					self.switchPlayers();
					i = -1;
				}
			}
		}
		// Showing what's on the board after end of turn
		console.log('new board arrangement after stones moved:', self.board.arrangement);
	};

	// Switch players
	this.switchPlayers = function() {
		self.currentPlayer = self.currentPlayer === 0 ? 1 : 0;
	};

	this.switchTurn = function() {
		self.switchPlayers();
	};
}

function Board() {
	this.arrangement = [[0, 4, 4, 4, 4, 4, 4], [0, 4, 4, 4, 4, 4, 4]];
}
