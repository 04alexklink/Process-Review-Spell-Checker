function spellChecker(string) {
   _isString(string)
   var wordBank = { 
    words: ["the", "weather", "over", "the", "next", "few", "days", "is", "looking", 
    "pretty", "chilly", "so", "make", "sure", "to", "wrap", "up", "warm"] 
  }
  var separateWordsArray = string.split(" ")
  var outputArrayOfWords = separateWordsArray.map((word) => {
    if (wordBank.words.includes(word.toLowerCase())) return word;
    return `~${word}~`;
  })
  return outputArrayOfWords.join(" ");
}

function _isString(string) {
  if (typeof(string) !== "string") throw new Error("A String was not inputted.")
}