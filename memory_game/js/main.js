console.log("Up and running!");

const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];
let score = 0;

function checkForMatch() {	
	if (cardsInPlay.length === 2) {
	    if (cardsInPlay[0] === cardsInPlay[1]) {
		    document.getElementById('notification').textContent = 'Found a match!';
		    setTimeout(resetBar, 1500);
		    score += 1;
	    }
	    else {
		    document.getElementById('notification').textContent = 'Try again!';
		    setTimeout(resetBoard, 1500);
		    setTimeout(resetBar, 1500);
		    score -= 1;
	    }
	    document.getElementById('score').textContent = 'Score: ' + score;
	    cardsInPlay = [];
    }
}

function flipCard() {
    let cardId = this.getAttribute('id');
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
}

function createBoard() {
	cardsInPlay = [];
	for (let i=0; i<cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);	
	}
}

function resetBoard() {
	let board = document.getElementById('game-board');
	for (let i=0; i<cards.length; i++) {
		board.removeChild(board.childNodes[0]);
	}
	createBoard();
}

function resetBoardHard() {
	let board = document.getElementById('game-board');
	for (let i=0; i<cards.length; i++) {
		board.removeChild(board.childNodes[0]);
	}
	score = 0;
	document.getElementById('score').textContent = 'Score: ' + score;
	createBoard();
}

function resetBar() {
	document.getElementById('notification').innerHTML = '&nbsp';
}

createBoard();

document.getElementById('reset').addEventListener('click', resetBoardHard);

