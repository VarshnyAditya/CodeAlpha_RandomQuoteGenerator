const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde"
  },
  {
  text: "Arise, awake, and stop not until the goal is reached.",
  author: "Swami Vivekananda"
    
  },
  {
  text: "Take risks in your life. If you win, you can lead. If you lose, you can guide.",
  author: "Swami Vivekananda"
    
  },
  {
  text: "You cannot believe in God until you believe in yourself.",
  author: "Swami Vivekananda"
    
  },
  {
  text: "In a conflict between the heart and the brain, follow your heart.",
  author: "Swami Vivekananda"
    
  },
  {
  text: "Talk to yourself once in a day, otherwise you may miss meeting an excellent person in this world.",
  author: "Swami Vivekananda"
    
  },
  {
  text: "With great power comes great responsibility.",
  author: "Tobey Maguire as Spider-Man"
  },
  {
  text: "Life is not the amount of breaths you take, it's the moments that take your breath away.",
  author: "Will Smith in 'Hitch'"
    
  },
  {
  text: "Just keep swimming.",
  author: "Ellen DeGeneres as Dory in 'Finding Nemo'"
    
  },
  {
  text: "Why so serious?",
  author: "Heath Ledger as The Joker"
    
  },
  {
  text: "I'll be back.",
  author: "Arnold Schwarzenegger in 'The Terminator'"
  },
  {
  text: "May the Force be with you.",
  author: "Harrison Ford as Han Solo"
    
  }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = quote.author ? `— ${quote.author}` : "— Unknown";
}

// Show quote on initial load
window.onload = getRandomQuote;

// Show new quote on button click
newQuoteBtn.addEventListener('click', getRandomQuote);
