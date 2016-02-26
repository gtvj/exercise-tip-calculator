'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TipCalculator = function () {
  _createClass(TipCalculator, [{
    key: 'food_cost',
    set: function set(amount) {
      this._food_cost = amount;
    },
    get: function get() {
      return this._food_cost;
    }
  }, {
    key: 'percentage',
    set: function set(int) {
      this._percentage = int;
    },
    get: function get() {
      return this._percentage;
    }
  }]);

  function TipCalculator(obj) {
    _classCallCheck(this, TipCalculator);

    this.food_cost = obj.food_cost;
    this.percentage = obj.percentage;
  }

  return TipCalculator;
}();
//# sourceMappingURL=exercise.js.map
