/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes Array

let quotes = [
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

function getRandomQuote() {
  let i = Math.floor(Math.random() * Math.floor(quotes.length));
  return quote = quotes[i];
};

// Random RGB Color - Credit: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let RGB = `rgb(${red},${green},${blue})`;

  document.body.style.background = RGB;
}

// Print Quote Function

function printQuote() {
  getRandomQuote();
  let HTML = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
    `;
  if (quote.citation) {
    HTML += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    HTML += `<span class="year">${quote.year}</span>`;
  }
  if (quote.country) {
    HTML += `<span> - ${quote.country}</span>`;
  }
  HTML += `</p>`
  document.getElementById("quote-box").innerHTML = HTML;
  randomColor();

}

//On Load printQuote()

printQuote();
randomColor();

// On Click printQuote()

let buttonClick = document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Auto Change Quotes - Credit: https://www.w3schools.com/jsref/met_win_setinterval.asp

setInterval(function() { printQuote(); }, 5000);