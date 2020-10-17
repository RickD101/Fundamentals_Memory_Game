const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/svg/queen_of_hearts2.svg"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/svg/queen_of_diamonds2.svg"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/svg/king_of_hearts2.svg"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/svg/king_of_diamonds2.svg"
},
{
rank: "jack",
suit: "hearts",
cardImage: "images/svg/jack_of_hearts2.svg"
},
{
rank: "jack",
suit: "diamonds",
cardImage: "images/svg/jack_of_diamonds2.svg"
},
{
rank: "ace",
suit: "hearts",
cardImage: "images/svg/ace_of_hearts.svg"
},
{
rank: "ace",
suit: "diamonds",
cardImage: "images/svg/ace_of_diamonds.svg"
},
{
rank: "ten",
suit: "hearts",
cardImage: "images/svg/10_of_hearts.svg"
},
{
rank: "ten",
suit: "diamonds",
cardImage: "images/svg/10_of_diamonds.svg"
},
{
rank: "nine",
suit: "hearts",
cardImage: "images/svg/9_of_hearts.svg"
},
{
rank: "nine",
suit: "diamonds",
cardImage: "images/svg/9_of_diamonds.svg"
},
{
rank: "eight",
suit: "hearts",
cardImage: "images/svg/8_of_hearts.svg"
},
{
rank: "eight",
suit: "diamonds",
cardImage: "images/svg/8_of_diamonds.svg"
},
{
rank: "seven",
suit: "hearts",
cardImage: "images/svg/7_of_hearts.svg"
},
{
rank: "seven",
suit: "diamonds",
cardImage: "images/svg/7_of_diamonds.svg"
},
{
rank: "six",
suit: "hearts",
cardImage: "images/svg/6_of_hearts.svg"
},
{
rank: "six",
suit: "diamonds",
cardImage: "images/svg/6_of_diamonds.svg"
},
{
rank: "five",
suit: "hearts",
cardImage: "images/svg/5_of_hearts.svg"
},
{
rank: "five",
suit: "diamonds",
cardImage: "images/svg/5_of_diamonds.svg"
},
{
rank: "four",
suit: "hearts",
cardImage: "images/svg/4_of_hearts.svg"
},
{
rank: "four",
suit: "diamonds",
cardImage: "images/svg/4_of_diamonds.svg"
},
{
rank: "three",
suit: "hearts",
cardImage: "images/svg/3_of_hearts.svg"
},
{
rank: "three",
suit: "diamonds",
cardImage: "images/svg/3_of_diamonds.svg"
},
{
rank: "two",
suit: "hearts",
cardImage: "images/svg/2_of_hearts.svg"
},
{
rank: "two",
suit: "diamonds",
cardImage: "images/svg/2_of_diamonds.svg"
},
{
rank: "queen",
suit: "spades",
cardImage: "images/svg/queen_of_spades2.svg"
},
{
rank: "queen",
suit: "clubs",
cardImage: "images/svg/queen_of_clubs2.svg"
},
{
rank: "king",
suit: "spades",
cardImage: "images/svg/king_of_spades2.svg"
},
{
rank: "king",
suit: "clubs",
cardImage: "images/svg/king_of_clubs2.svg"
},
{
rank: "jack",
suit: "spades",
cardImage: "images/svg/jack_of_spades2.svg"
},
{
rank: "jack",
suit: "clubs",
cardImage: "images/svg/jack_of_clubs2.svg"
},
{
rank: "ace",
suit: "spades",
cardImage: "images/svg/ace_of_spades.svg"
},
{
rank: "ace",
suit: "clubs",
cardImage: "images/svg/ace_of_clubs.svg"
},
{
rank: "ten",
suit: "spades",
cardImage: "images/svg/10_of_spades.svg"
},
{
rank: "ten",
suit: "clubs",
cardImage: "images/svg/10_of_clubs.svg"
},
{
rank: "nine",
suit: "spades",
cardImage: "images/svg/9_of_spades.svg"
},
{
rank: "nine",
suit: "clubs",
cardImage: "images/svg/9_of_clubs.svg"
},
{
rank: "eight",
suit: "spades",
cardImage: "images/svg/8_of_spades.svg"
},
{
rank: "eight",
suit: "clubs",
cardImage: "images/svg/8_of_clubs.svg"
},
{
rank: "seven",
suit: "spades",
cardImage: "images/svg/7_of_spades.svg"
},
{
rank: "seven",
suit: "clubs",
cardImage: "images/svg/7_of_clubs.svg"
},
{
rank: "six",
suit: "spades",
cardImage: "images/svg/6_of_spades.svg"
},
{
rank: "six",
suit: "clubs",
cardImage: "images/svg/6_of_clubs.svg"
},
{
rank: "five",
suit: "spades",
cardImage: "images/svg/5_of_spades.svg"
},
{
rank: "five",
suit: "clubs",
cardImage: "images/svg/5_of_clubs.svg"
},
{
rank: "four",
suit: "spades",
cardImage: "images/svg/4_of_spades.svg"
},
{
rank: "four",
suit: "clubs",
cardImage: "images/svg/4_of_clubs.svg"
},
{
rank: "three",
suit: "spades",
cardImage: "images/svg/3_of_spades.svg"
},
{
rank: "three",
suit: "clubs",
cardImage: "images/svg/3_of_clubs.svg"
},
{
rank: "two",
suit: "spades",
cardImage: "images/svg/2_of_spades.svg"
},
{
rank: "two",
suit: "clubs",
cardImage: "images/svg/2_of_clubs.svg"
},
];

let cardsInPlay = [];
let cardsFlipped = [];
let cardsNotFlipped = [];
let cardSelection = [];
let board;
let cardMatch =[];
let cardSelect =[];
for (i=0; i<cards.length; i++) {
	cardSelect[i] = i;
}

let score = 0;
let bonus = 1;
let delay = 1250;
let cardNumber = 26;

function checkForMatch() {	
	if (cardsInPlay.length === 2) {
	    
	    blockInput();
	   
	    if (cardsInPlay[0] === cardsInPlay[1]) {
		    document.getElementById('notification').textContent = 'Found a match!';
		    setTimeout(resetBar, delay);
		    score += 1*bonus;
		    bonus = bonus*2;
	    }
	    
	    else {
		    document.getElementById('notification').textContent = 'Try again!';
		    setTimeout(resetFlip, delay);
		    setTimeout(resetBar, delay);
		    score -= 1;
		    bonus = 1;
	    }
	    
	    document.getElementById('score').textContent = 'Score: ' + score;
	    cardsInPlay = [];
	    setTimeout(restoreInput, delay);
    }
    
    if (cardsFlipped.length == cardNumber) {
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
		document.getElementById(cardSelection[i]).removeEventListener('click', flipCard);
	}
}

function restoreInput() {
	cardsNotFlipped = document.querySelectorAll("img[src='images/back2.png']");
	for (let i=0; i<cardsNotFlipped.length; i++) {
		cardsNotFlipped[i].addEventListener('click', flipCard);
	}
}

function createBoard() {

	let a = [];
	let b = [];

	for (let i=0; i<cardNumber/2; i++) {
		cardMatch = [];
		a = cardSelect[Math.floor(Math.random()*cardSelect.length)];
		cardSelect.splice(cardSelect.indexOf(a), 1);
		
		for (let i=0; i<cardSelect.length; i++) {
			if (cards[cardSelect[i]].rank === cards[a].rank) {
				cardMatch.push(cardSelect[i]);
			}
		}		
		
		b = cardMatch[Math.floor(Math.random()*cardMatch.length)];
		cardSelect.splice(cardSelect.indexOf(b), 1);
		cardSelection.push(a, b);
	}

	shuffleArray(cardSelection);
	
	for (let i=0; i<cardSelection.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back2.png');
		cardElement.setAttribute('id', cardSelection[i]);
		cardElement.setAttribute('class', 'card');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);	
	}
}

function resetFlip() {
	let card1 = document.getElementById(cardsFlipped[cardsFlipped.length -1]);
	card1.setAttribute('src', 'images/back2.png');
	card1.addEventListener('click', flipCard);
	
	let card2 = document.getElementById(cardsFlipped[cardsFlipped.length -2]);
	card2.setAttribute('src', 'images/back2.png');
	card2.addEventListener('click', flipCard);
	
	cardsFlipped.pop();
	cardsFlipped.pop();
}

function resetBoard() {
	let val = document.getElementById("cardNumber").value;

	if (val%2 == 0 && val>=4 && val<=52) {
		board = document.getElementById('game-board');
		
		for (let i=0; i<cardNumber; i++) {
			board.removeChild(board.childNodes[0]);
		}
		score = 0;
		bonus = 1;
		document.getElementById('score').textContent = 'Score: ' + score;
		cardsInPlay = [];
		cardsFlipped = [];
		cardsNotFlipped = [];
		cardSelection = [];
		for (i=0; i<cards.length; i++) {
			cardSelect[i] = i;
		}
		cardNumber = document.getElementById("cardNumber").value;
		resetBar();
		createBoard();
	}
	else {
		alert("Please enter an even number between 4 and 52!");
	}
}

function resetBar() {
	document.getElementById('notification').innerHTML = '&nbsp';
}

function gameOver() {
	document.getElementById('notification').textContent = 'Game Over.';
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

createBoard();

