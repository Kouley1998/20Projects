//Get Quotes from Api


const quoteId = document.getElementById('quote-ID')
const QuoteText = document.getElementById('quote')
const QuoteAuthor = document.getElementById('author')
const NewQuotes = document.getElementById('new-quote')
const twitterQuotes = document.getElementById('twitter')
const Loader = document.getElementById('loader')







let apiQuotes = [];



function loading() {



    Loader.hidden = false
    quoteId.hidden = true

}
function complet() {



    quoteId.hidden = false
    Loader.hidden = true


}

function newQuotes(){
    //pick random code 
    loading();

    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    console.log(  quote)
    // check if empty 
    QuoteText.textContent=quote.text

    if (!quote.author) {
        QuoteAuthor.textContent = 'Unknown'
    } else{
        QuoteAuthor.textContent= quote.author
    }


    if (quote.text >12 ){
        QuoteText.classList.add('long-quote')
    }

    else{
        QuoteText.classList.remove('long-quote')
    }

    complet()


}

async function getQuotes() {
    loading()
     const apiUrl = 'https://type.fit/api/quotes';
     try {

        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();

     } catch(error){
         //catch error handle 
     }
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${QuoteText.textContent} - ${QuoteAuthor.textContent}

    `; 
    window.open(twitterUrl, '_blanck');

}


// add event lister 



NewQuotes.addEventListener('click', newQuotes)
twitterQuotes.addEventListener('click', tweetQuote)






getQuotes()














