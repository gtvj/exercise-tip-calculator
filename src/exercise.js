'use strict';

class TipCalculator {

  set food_cost(amount) {
    this._food_cost = amount;
  }

  get food_cost() {
    return this._food_cost;
  }

  set percentage(int) {
    this._percentage = int;
  }

  get percentage() {
    return this._percentage;
  }

  constructor(obj) {
    this.food_cost = obj.food_cost;
    this.percentage = obj.percentage;
  }
}