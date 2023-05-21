/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/// Firstly I define the quotes I am going to use.


quotes = [{quote:'I have no special talent. I am only passionately curious', source:'Albert Einstein', citation:'Newspaper interview', year:1930}, {quote:'love all, trust a few, do wrong to none.', source:'William Shakespeare', citation:'All is Well That Ends Well', year:1605},
    {quote:'Life is like riding a bicycle. To keep your balance, you must keep moving.', source:'Albert Einstein', citation:'Letter to his son', year:1930},
    {quote:'Do not live the same year 75 times and call it a life.', source:'Robin Sharma', citation:'Public Speech in Toronto', year:2010, advice:'Life Advice'}, {quote:'That which does not kill us makes us stronger.', source:'Friedrich Nietzsche', citation:'Twilight of the Idols', year:1889},
    {quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.', source: 'Patrick McKenzie', year:2016, citation: 'Twitter'}]



/// I define the function that will help me to get one Random Quote from the quotes created before.

function getRandomQuote() {

    let number = Math.floor(Math.random() * quotes.length);

    /*
    console.log(number);
     */
    return quotes[number];

}




/// I create a function that will take my random quote and place that quote into my HTML code.

function printQuote(){

    let random_quote = getRandomQuote()
    let display_quote = `<p class="quote">${random_quote.quote}</p>` +
        `<p class="source">${random_quote.source}`

    if (random_quote.citation){
        display_quote += `<span class="citation">${random_quote.citation}</span>`
    }
    if (random_quote.year){

    display_quote += `<span class="year">${random_quote.year}</span>`
    }

    if (random_quote.advice){

    display_quote += `<strong class="year">${random_quote.advice}</strong>`
    }

    display_quote + `</p>`

    document.getElementById('quote-box').innerHTML = display_quote;
    random_Back()

}



/// Creating a fucntion that displays a Random Background each time is called

function random_Back (){

let colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple'];
    let num = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[num];

}

/// Printing quotes automatically

function auto() {
  setInterval(printQuote, 10000); // Executes printQuote every 10 seconds (10000 milliseconds)
}

auto()


document.getElementById('load-quote').addEventListener("click", printQuote, false);