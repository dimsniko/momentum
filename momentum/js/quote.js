
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote') 

async function getRandomNum(min, max) {
    min = 0
    max = 30
    return Math.floor(Math.random() * (max-min + 1)) + min
}

async function getQuotes() {  
  let beforeNumber = localStorage.getItem('beforeNumber');
  console.log(`oldValue ${beforeNumber}`)
    let randomNum = await getRandomNum()
    const res = await fetch('data.json');
    const data = await res.json(); 

    console.log(`randomValue ${randomNum}`)

   while (beforeNumber == randomNum) {
    console.log("Enter while cycle")
      randomNum = await getRandomNum()
    }

beforeNumber = randomNum;
console.log(`newRandomNumber: ${randomNum}`)

localStorage.setItem('beforeNumber', beforeNumber);

    quote.textContent = data[randomNum].text;   
    author.textContent = data[randomNum].author;
  }

 getQuotes();
  
changeQuote.addEventListener('click', getQuotes)
