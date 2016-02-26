'use strict';

class TipCalculator {

  set food_cost(amount) {
    this._food_cost = parseFloat(amount);
  }

  get food_cost() {
    return this._food_cost;
  }

  set percentage(int) {
    this._percentage = parseFloat(int);
  }

  get percentage() {
    return this._percentage;
  }

  get tip_amount() {
    return (this.food_cost / 100) * this.percentage;
  }

  get bill_amount() {
    return (this.food_cost + this.tip_amount).toFixed(2);
  }

  constructor(obj) {
    this.food_cost = obj.food_cost;
    this.percentage = obj.percentage;
  }
}

// Simple browser based UI for interactive testing
(function () {

  var params = {}, tc;
  params.food_cost = prompt("What is the cost of food?");
  params.percentage = prompt("What percentage tip would you like to apply?");

  tc = new TipCalculator(params);

  console.log(tc.bill_amount);

})();