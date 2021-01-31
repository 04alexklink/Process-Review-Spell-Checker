function spellChecker(string) {
  var wordBank = { 
    words: ["the", "weather", "over", "the", "next", "few", "days", "is", "looking", 
    "pretty", "chilly", "so", "make", "sure", "to", "wrap", "up", "warm"] 
  }
  
  if (wordBank.words.includes(string.toLowerCase())) return string
  return `~${string}~`
//   outputArray = wordBank.words.filter((word) => {
//     if(string == word) {
//      return string
//     }
//   })
//   return outputArray.toString();
}