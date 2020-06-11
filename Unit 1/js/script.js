/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes Array

var quotes = [
  {
    quote: "We are all responsible for everyone else—but I am more responsible than all the others.",
    source: "Fyodor Dostoyevsky",
    year: "1880",
    country: "Russia"
  },
  {
    quote: "Every man in a bank hates what the bank does, and yet the bank does it. It's something more than men, it's the monster. Men made it, but they can't control it.",
    source: "John Steinbeck",
    year: "1939",
    country: "United States"
  },  
  {
    quote: "There is only one thing that I dread: not to be worthy of my sufferings.",
    source: "Fyodor Dostoyevsky",
    year: "Circa 1870",
    country: "Russia"
  },
  {
    quote: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
    source: "Ernest Hemingway",
    year: "1922"
  },
  {
    quote: "In any moment of decision, the best thing you can do is the right thing. The worst thing you can do is nothing.",
    source: "Teddy Roosevelt",
    year: "1907"
  }
]

// Random Number Function

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// Random RGB Color

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var bgColor = `rgb(${red},${green},${blue})`;

  document.body.style.background = bgColor;
}

// Print Quote Function

function printQuote() {
  var quoteNum = getRandomInt(quotes.length);
  document.getElementsByClassName('quote')[0].innerText = quotes[quoteNum]["quote"]
  document.getElementsByClassName('source')[0].innerHTML = 
    `${quotes[quoteNum]["source"]}<span class="year">${quotes[quoteNum]["year"]}</span>`
  if ( quotes[quoteNum]["country"] ) {
    document.getElementsByClassName('source')[0].innerHTML = 
    `${quotes[quoteNum]["source"]}<span class="year">${quotes[quoteNum]["year"]}</span><span class="country">, ${quotes[quoteNum]["country"]}</span>`
  }

  randomColor();
}

//On Load printQuote()

printQuote();
randomColor();

// On Click printQuote()

var buttonClick = document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Auto Change Quotes

const interval = setInterval(function() {
  printQuote();
}, 5000);

// Add Additional Object Property

