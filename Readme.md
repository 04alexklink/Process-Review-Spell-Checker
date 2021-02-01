# Process Review Spell Checker
## Client requirements:

I work for a company called MegaSoftWired and we make a word processor. One of the features we would like to implement and for you to build for us today is a spell checker. 

So a string should be inputted, and any misspelt words should have ~ signs on either side of said word, but other than that the string should be returned as it was. 
As it's just a prototype, the wordbank you can use for now can be about 10 words. 

So example sentence I will use: 
- "The weather over the next few days is looking pretty chilly so make sure to wrap up warm"
- wordbank = { words: ["The", "weather", "over", "the", "next", "few", "days", "is", "looking" 
"pretty", "chilly", "so", "make" "sure", "to", "wrap", "up", "warm"] }

|INPUT                          | OUTPUT|
|-------------------------------|------------|
|"weather"                      |   "weather"|
|"weeather"                     |   "~weeather~"|
|"Weather                       |   "Weather"|
|"The weather"                  |   "The weather"|
|"The weeather"                 |   "The ~weeather~"|
|string1                        |   string2|

string1 = "The weeather over thee next few days is looking prettyy chilly so make sure to wrap up warm"

string2 = "The ~weeather~ over ~thee~ next few days is looking ~prettyy~ chilly so make sure to wrap up warm"

Edge Cases:
- String is empty. Throw error. 
- The argument inputted is not a string. Throw error. 