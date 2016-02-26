'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TipCalculator = function () {
  _createClass(TipCalculator, [{
    key: "food_cost",
    set: function set(amount) {
      this._food_cost = parseFloat(amount);
    },
    get: function get() {
      return this._food_cost;
    }
  }, {
    key: "percentage",
    set: function set(int) {
      this._percentage = parseFloat(int);
    },
    get: function get() {
      return this._percentage;
    }
  }, {
    key: "tip_amount",
    get: function get() {
      return this.food_cost / 100 * this.percentage;
    }
  }, {
    key: "bill_amount",
    get: function get() {
      return (this.food_cost + this.tip_amount).toFixed(2);
    }
  }]);

  function TipCalculator(obj) {
    _classCallCheck(this, TipCalculator);

    this.food_cost = obj.food_cost;
    this.percentage = obj.percentage;
  }

  return TipCalculator;
}();

// Simple browser based UI for interactive testing


(function () {

  var params = {},
      tc;
  params.food_cost = prompt("What is the cost of food?");
  params.percentage = prompt("What percentage tip would you like to apply?");

  tc = new TipCalculator(params);

  console.log(tc.bill_amount);
})();
//# sourceMappingURL=exercise.js.map
