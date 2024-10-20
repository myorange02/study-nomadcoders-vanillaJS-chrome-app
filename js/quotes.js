const quotes = [
{
quote: "I can't do this all day.",
author: 'Steve Rodgers'
},
{
quote: 'Just Do It Later',
author: 'Nike'
},
{
quote: 'That was not easy.',
author: 'Staples'
},
{
quote: "I'm gonna be the king of the pirates!",
author: 'Monkey D Luffy (One Piece)'
},
{
quote: 'Why is it working?',
author: 'One of the Jr. Developers'
},
{
quote: 'print("give me some sleep")',
author: 'Python'
},
{
quote: 'I love kimchi so much :D',
author: 'Nicolas Serrano Arevalo'
},
{
quote: 'You become what you believe.',
author: 'Pawn (Chess)'
},
{
quote: 'A red horned one is three times as fast!',
author: 'Mobile Suit Gundam'
},
{
quote: 'All the world on one arrow.',
author: 'Ashe (League of Legends)'
},
];

const quote = document.querySelector('#quote div:first-child');
const author = document.querySelector('#quote div:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;