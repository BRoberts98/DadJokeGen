var quotes = [
    'Which bear is the most condescending? A pan-duh!',
    'What kind of noise does a witch’s vehicle make? Brrrroooom, brrroooom.',
    'What’s brown and sticky? A stick.',
    'Two guys walked into a bar. The third guy ducked.',
    'How do you get a country girl’s attention? A tractor.',
    'Why are elevator jokes so classic and good? They work on many levels.',
    'What do you call a pudgy psychic? A four-chin teller.',
    'What did the police officer say to his belly-button? You’re under a vest.',
    'What do you call it when a group of apes starts a company? Monkey business.',
    'My wife asked me to stop singing “Wonderwall” to her. I said maybe…',
    'What kind of drink can be bitter and sweet? Reali-tea.',
    'What do you call a naughty lamb dressed up like a skeleton for Halloween? Baaad to the bone.',
    'Want to know why nurses like red crayons? Sometimes they have to draw blood.',
    'What would the Terminator be called in his retirement? The Exterminator.',
    'What did Tennessee? The same thing as Arkansas.',
    'My wife asked me to go get 6 cans of Sprite from the grocery store. I realized when I got home that I had picked 7 up.',
    'Why do bees have sticky hair? Because they use a honeycomb.',
    'Why do some couples go to the gym? Because they want their relationship to work out.',
    'What do you call an angry musician flipping someone off? A song bird.',
    'What’s the most detail-oriented ocean? The Pacific.',
]
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
}