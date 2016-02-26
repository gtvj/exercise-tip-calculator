describe("A TipCalculator", function () {

  beforeEach(function () {
    tc = new TipCalculator({food_cost: 40, percentage: 20});
  });

  it("should have the food cost initialized correctly", function () {
    expect(tc.food_cost).toBe(40);
  });

  it("should have the percentage initialized correctly", function() {
    expect(tc.percentage).toBe(20);
  });

  it("should return the correct tip amount", function () {
    expect(tc.tip_amount).toBe(8);
  });

  it("should return the correct bill amount", function () {
    expect(tc.bill_amount).toEqual((48).toFixed(2));
  });

});