describe("spellChecker", () => {
  var string;
  it("takes string input and returns it as it is if exists in the wordbank", () => {
    string = "weather";
    expect(spellChecker(string)).toEqual("weather");
  })
  it("encircles tildas around words not recognised in the wordbank", () => {
    string = "weeather";
    expect(spellChecker(string)).toEqual("~weeather~")
  })
  it("recognises word capitalisation and returns output with same capitalisation as input", () => {
    string = "Weather";
    expect(spellChecker(string)).toEqual("Weather");
  })
  it("takes in a string with  multiple words and returns it when all spelt correctly", () => {
    string = "the weather";
    expect(spellChecker(string)).toEqual("the weather");
  })
})