# Process Review 3

Client requirements:
I work for a company called MegaSoftWired and we make a word processor. One of the features we would like to implement and for you to build for us today is a spell checker. 

So a string should be inputted, and any misspelt words should have ~ signs on either side of said word, but other than that the string should be returned as it was. 
As it's just a prototype, the word bank you can use for now can be about 10 words. 


So example sentence I will use: 
"The weather over the next few days is looking pretty chilly so make sure to wrap up warm"
wordbank = { words: ["The", "weather", "over", "the", "next", "few", "days", "is", "looking" 
"pretty", "chilly", "so", "make" "sure", "to", "wrap", "up", "warm"] }

INPUT                          | OUTPUT
"weather"                      |   "weather"
"Weather"                      |   "Weather"