'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TipCalculator = function () {
  _createClass(TipCalculator, [{
    key: 'food_cost',
    set: function set(amount) {
      console.log('setting ' + amount);
      this._food_cost = amount;
    },
    get: function get() {
      console.log('getting food cost');
      return this._food_cost;
    }
  }]);

  function TipCalculator(obj) {
    _classCallCheck(this, TipCalculator);

    this.food_cost = obj.food_cost;
  }

  return TipCalculator;
}();
//# sourceMappingURL=exercise.js.map
