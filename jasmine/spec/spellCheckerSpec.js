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
  it("takes string input with some words not in the wordbank and returns expected output", () => {
    string = "The weeather";
    expect(spellChecker(string)).toEqual("The ~weeather~");
  })
  it("takes string input with some words not in the wordbank and returns expected output", () => {
    string1 = "The weather over the next few days is looking pretty chilly so make sure to wrap up warm"
    expect(spellChecker(string1)).toEqual(string1);
  })
  it("takes string input with some words not in the wordbank and returns expected output", () => {
    string1 = "The weeather over thee next few days is looking prettyy chilly so make sure to wrap up warm"
    string2 = "The ~weeather~ over ~thee~ next few days is looking ~prettyy~ chilly so make sure to wrap up warm"
    expect(spellChecker(string1)).toEqual(string2);
  })
  describe("edge cases", () => {
    it("throws error if anything other than a string is inputted", () => {
      array = []
      expect(function() {spellChecker(array)}).toThrowError("A String was not inputted.")
    })
  })
})