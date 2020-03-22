console.log("Up and running!");

const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/png/queen_of_hearts2.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/png/queen_of_diamonds2.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/png/king_of_hearts2.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/png/king_of_diamonds2.png"
},
{
rank: "jack",
suit: "hearts",
cardImage: "images/png/jack_of_hearts2.png"
},
{
rank: "jack",
suit: "diamonds",
cardImage: "images/png/jack_of_diamonds2.png"
},
{
rank: "ace",
suit: "hearts",
cardImage: "images/png/ace_of_hearts.png"
},
{
rank: "ace",
suit: "diamonds",
cardImage: "images/png/ace_of_diamonds.png"
},
{
rank: "ten",
suit: "hearts",
cardImage: "images/png/10_of_hearts.png"
},
{
rank: "ten",
suit: "diamonds",
cardImage: "images/png/10_of_diamonds.png"
},
{
rank: "nine",
suit: "hearts",
cardImage: "images/png/9_of_hearts.png"
},
{
rank: "nine",
suit: "diamonds",
cardImage: "images/png/9_of_diamonds.png"
},
{
rank: "eight",
suit: "hearts",
cardImage: "images/png/8_of_hearts.png"
},
{
rank: "eight",
suit: "diamonds",
cardImage: "images/png/8_of_diamonds.png"
},
{
rank: "seven",
suit: "hearts",
cardImage: "images/png/7_of_hearts.png"
},
{
rank: "seven",
suit: "diamonds",
cardImage: "images/png/7_of_diamonds.png"
},{
rank: "six",
suit: "hearts",
cardImage: "images/png/6_of_hearts.png"
},
{
rank: "six",
suit: "diamonds",
cardImage: "images/png/6_of_diamonds.png"
},
{
rank: "five",
suit: "hearts",
cardImage: "images/png/5_of_hearts.png"
},
{
rank: "five",
suit: "diamonds",
cardImage: "images/png/5_of_diamonds.png"
},
{
rank: "four",
suit: "hearts",
cardImage: "images/png/4_of_hearts.png"
},
{
rank: "four",
suit: "diamonds",
cardImage: "images/png/4_of_diamonds.png"
},
{
rank: "three",
suit: "hearts",
cardImage: "images/png/3_of_hearts.png"
},
{
rank: "three",
suit: "diamonds",
cardImage: "images/png/3_of_diamonds.png"
},{
rank: "two",
suit: "hearts",
cardImage: "images/png/2_of_hearts.png"
},
{
rank: "two",
suit: "diamonds",
cardImage: "images/png/2_of_diamonds.png"
},
{
rank: "queen",
suit: "spades",
cardImage: "images/png/queen_of_spades2.png"
},
{
rank: "queen",
suit: "clubs",
cardImage: "images/png/queen_of_clubs2.png"
},
{
rank: "king",
suit: "spades",
cardImage: "images/png/king_of_spades2.png"
},
{
rank: "king",
suit: "clubs",
cardImage: "images/png/king_of_clubs2.png"
},
{
rank: "jack",
suit: "spades",
cardImage: "images/png/jack_of_spades2.png"
},
{
rank: "jack",
suit: "clubs",
cardImage: "images/png/jack_of_clubs2.png"
},
{
rank: "ace",
suit: "spades",
cardImage: "images/png/ace_of_spades.png"
},
{
rank: "ace",
suit: "clubs",
cardImage: "images/png/ace_of_clubs.png"
},
{
rank: "ten",
suit: "spades",
cardImage: "images/png/10_of_spades.png"
},
{
rank: "ten",
suit: "clubs",
cardImage: "images/png/10_of_clubs.png"
},
{
rank: "nine",
suit: "spades",
cardImage: "images/png/9_of_spades.png"
},
{
rank: "nine",
suit: "clubs",
cardImage: "images/png/9_of_clubs.png"
},
{
rank: "eight",
suit: "spades",
cardImage: "images/png/8_of_spades.png"
},
{
rank: "eight",
suit: "clubs",
cardImage: "images/png/8_of_clubs.png"
},
{
rank: "seven",
suit: "spades",
cardImage: "images/png/7_of_spades.png"
},
{
rank: "seven",
suit: "clubs",
cardImage: "images/png/7_of_clubs.png"
},{
rank: "six",
suit: "spades",
cardImage: "images/png/6_of_spades.png"
},
{
rank: "six",
suit: "clubs",
cardImage: "images/png/6_of_clubs.png"
},
{
rank: "five",
suit: "spades",
cardImage: "images/png/5_of_spades.png"
},
{
rank: "five",
suit: "clubs",
cardImage: "images/png/5_of_clubs.png"
},
{
rank: "four",
suit: "spades",
cardImage: "images/png/4_of_spades.png"
},
{
rank: "four",
suit: "clubs",
cardImage: "images/png/4_of_clubs.png"
},
{
rank: "three",
suit: "spades",
cardImage: "images/png/3_of_spades.png"
},
{
rank: "three",
suit: "clubs",
cardImage: "images/png/3_of_clubs.png"
},{
rank: "two",
suit: "spades",
cardImage: "images/png/2_of_spades.png"
},
{
rank: "two",
suit: "clubs",
cardImage: "images/png/2_of_clubs.png"
},
];

let cardsInPlay = [];
let cardsFlipped = [];
let cardsNotFlipped = [];
let score = 0;
let delay = 150;
let cardNumber = 52;

function checkForMatch() {	
	if (cardsInPlay.length === 2) {
	    blockInput();
	    if (cardsInPlay[0] === cardsInPlay[1]) {
		    document.getElementById('notification').textContent = 'Found a match!';
		    setTimeout(resetBar, delay);
		    score += 1;
	    }
	    else {
		    document.getElementById('notification').textContent = 'Try again!';
		    setTimeout(resetFlip, delay);
		    setTimeout(resetBar, delay);
		    score -= 1;
	    }
	    document.getElementById('score').textContent = 'Score: ' + score;
	    cardsInPlay = [];
	    setTimeout(restoreInput, delay);
    }
    if (cardsFlipped.length === cardNumber) {
    	setTimeout(gameOver, delay);
    }
}

function flipCard() {
    let cardId = this.getAttribute('id');
    cardsInPlay.push(cards[cardId].rank);
    cardsFlipped.push(this.getAttribute('id'));
    this.setAttribute('src', cards[cardId].cardImage);
    this.removeEventListener('click', flipCard);
    checkForMatch();
}

function blockInput() {
	for (let i=0; i<cardNumber; i++) {
		document.getElementById(i).removeEventListener('click', flipCard);
	}
}

function restoreInput() {
	cardsNotFlipped = document.querySelectorAll("img[src='images/back.png'");
	for (let i=0; i<cardsNotFlipped.length; i++) {
		cardsNotFlipped[i].addEventListener('click', flipCard);
	}
}

function createBoard() {
	for (let i=0; i<cardNumber; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('id', i);
		cardsNotFlipped.push(i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);	
	}
}

function resetFlip() {
	let card1 = document.getElementById(cardsFlipped[cardsFlipped.length -1]);
	card1.setAttribute('src', 'images/back.png');
	card1.addEventListener('click', flipCard);
	let card2 = document.getElementById(cardsFlipped[cardsFlipped.length -2]);
	card2.setAttribute('src', 'images/back.png');
	card2.addEventListener('click', flipCard);
	cardsFlipped.pop();
	cardsFlipped.pop();
}

function resetBoard() {
	let board = document.getElementById('game-board');
	for (let i=0; i<cardNumber; i++) {
		board.removeChild(board.childNodes[0]);
	}
	score = 0;
	document.getElementById('score').textContent = 'Score: ' + score;
	cardsInPlay = [];
	cardsFlipped = [];
	cardsNotFlipped = [];
	resetBar();
	createBoard();
}

function resetBar() {
	document.getElementById('notification').innerHTML = '&nbsp';
}

function gameOver() {
	document.getElementById('notification').textContent = 'Game Over.';
}

createBoard();

document.getElementById('reset').addEventListener('click', resetBoard);

