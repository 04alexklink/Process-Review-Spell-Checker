function spellChecker(string) {
  var wordBank = { 
    words: ["the", "weather", "over", "the", "next", "few", "days", "is", "looking", 
    "pretty", "chilly", "so", "make", "sure", "to", "wrap", "up", "warm"] 
  }
  var separateWordsArray = string.split(" ")
  console.log(separateWordsArray)
  outputArrayOfWords = separateWordsArray.map((word) => {
    if (wordBank.words.includes(word.toLowerCase())) return word;
    return `~${word}~`;
  })
  console.log("hey", outputArrayOfWords)
  return outputArrayOfWords.join(" ");
}