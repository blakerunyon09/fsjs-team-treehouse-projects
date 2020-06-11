/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes Array

var quotes = [
  {
    quote: "We are all responsible for everyone else—but I am more responsible than all the others.",
    source: "Fyodor Dostoyevsky",
    citation: "Brothers Karamazov",
    year: "1880",
    country: "Russia"
  },
  {
    quote: "Every man in a bank hates what the bank does, and yet the bank does it. It's something more than men, it's the monster. Men made it, but they can't control it.",
    source: "John Steinbeck",
    citation: "Grapes of Wrath",
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
    year: "1907",
    country: "United States"
  }
]

// Random Number Function

function getRandomQuote(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// Random RGB Color - Credit: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var RGB = `rgb(${red},${green},${blue})`;

  document.body.style.background = RGB;
}

// Print Quote Function

function printQuote() {
  var quoteNum = getRandomQuote(quotes.length);
  var HTML = `
    <p class="quote">${quotes[quoteNum]["quote"]}</p>
    <p class="source">${quotes[quoteNum]["source"]}
    `;
  if (quotes[quoteNum]["citation"]) {
    HTML += `<span class="citation">${quotes[quoteNum]["citation"]}</span>`;
  }
  if (quotes[quoteNum]["year"]) {
    HTML += `<span class="year">${quotes[quoteNum]["year"]}</span>`;
  }
  if (quotes[quoteNum]["country"]) {
    HTML += `<span> - ${quotes[quoteNum]["country"]}</span>`;
  }
  HTML += `</p>`
  document.getElementById("quote-box").innerHTML = HTML;
  randomColor();

}

//On Load printQuote()

printQuote();
randomColor();

// On Click printQuote()

var buttonClick = document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Auto Change Quotes - Credit: https://www.w3schools.com/jsref/met_win_setinterval.asp

setInterval(function() { printQuote(); }, 5000);