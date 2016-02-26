describe("A TipCalculator", function () {

  beforeEach(function () {
    tc = new TipCalculator({food_cost: 40});
  })

  it("should have the food cost initialized correctly", function () {
    expect(tc.food_cost).toBe(40);
  });
});