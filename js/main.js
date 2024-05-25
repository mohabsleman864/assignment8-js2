const arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': '“Be yourself; everyone else is already taken.”'
    },
    {'author': 'Marilyn Monroe', 
     'quote': "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
    },
    {'author': 'Frank Zappa', 
     'quote': '“So many books, so little time.”'
    },
    {'author': 'Albert Einstein', 
     'quote': "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': '“A room without books is like a body without a soul.”'
    },
    {'author': 'Mae West', 
     'quote': '“You only live once, but if you do it right, once is enough.”'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}