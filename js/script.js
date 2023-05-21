/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


quotes = [{quote:'I have no special talent. I am only passionately curious', source:'Albert Einstein', citation:'Newspaper interview', year:1930}, {quote:'love all, trust a few, do wrong to none.', source:'William Shakespeare', citation:'All is Well That Ends Well', year:1605},
    {quote:'Life is like riding a bicycle. To keep your balance, you must keep moving.', source:'Albert Einstein', citation:'Letter to his son', year:1930},
    {quote:'Do not live the same year 75 times and call it a life.', source:'Robin Sharma', citation:'Public Speech in Toronto', year:2010}, {quote:'That which does not kill us makes us stronger.', source:'Friedrich Nietzsche', citation:'Twilight of the Idols', year:1889}]




function getRandomQuote() {

    let number = Math.floor(Math.random() * quotes.length);

    /*
    console.log(number);
     */
    return quotes[number];

}



/***
 * `printQuote` function
***/

function printQuote(){

    let random_quote = getRandomQuote()
    let display_quote = `<p class="quote">${random_quote.quote}</p>` +
        `<p class="source">${random_quote.source}`

    if (random_quote.citation){
        display_quote + `<span class="citation">${random_quote.citation}</span>`
    }
    if (random_quote.year){

    display_quote + `<span class="year">${random_quote.year}</span>`
    }
    display_quote + `</p>`

    document.getElementById('quote-box').innerHTML = display_quote;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);