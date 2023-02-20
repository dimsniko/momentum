
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote') 

const getRandomNum = (min, max) => {
    min = 0
    max = 30
    return Math.floor(Math.random() * (max-min + 1)) + min
}



async function getQuotes() {  
    let randomNum = getRandomNum()
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    quote.textContent = data[randomNum].text    
    author.textContent = data[randomNum].author
    console.log(data);
    
  }
  getQuotes();


  
  
changeQuote.addEventListener('click', getQuotes)
console.dir(quote)