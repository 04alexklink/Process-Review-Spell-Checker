describe("spellChecker", () => {
  var string;
  it("takes string input and returns it as it is if not misspelt", () => {
    string = "weather";
    expect(spellChecker(string)).toEqual("weather");
  })
})