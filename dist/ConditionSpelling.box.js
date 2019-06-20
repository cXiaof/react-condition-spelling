"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ConditionSpellingBox = _interopRequireDefault(require("./ConditionSpelling.box.field"));

var _ConditionSpellingBox2 = _interopRequireDefault(require("./ConditionSpelling.box.door"));

var _ConditionSpellingBox3 = _interopRequireDefault(require("./ConditionSpelling.box.symbol"));

var _ConditionSpellingBox4 = _interopRequireDefault(require("./ConditionSpelling.box.parenthese"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ConditionSpellingBox =
/*#__PURE__*/
function (_Component) {
  _inherits(ConditionSpellingBox, _Component);

  function ConditionSpellingBox(props) {
    var _this;

    _classCallCheck(this, ConditionSpellingBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConditionSpellingBox).call(this, props));
    var fields = props.fields,
        symbols = props.symbols,
        doors = props.doors;

    var _Object$entries$ = _slicedToArray(Object.entries(fields)[0], 2),
        field = _Object$entries$[0],
        type = _Object$entries$[1].type;

    var _Object$entries$2 = _slicedToArray(Object.entries(symbols[type])[0], 2),
        symbol = _Object$entries$2[0],
        noNeedValue = _Object$entries$2[1].noNeedValue;

    var initState = {
      field: field,
      type: type,
      symbol: symbol,
      noNeedValue: noNeedValue
    };
    initState.door = Object.keys(doors)[0];
    _this.state = initState;
    return _this;
  }

  _createClass(ConditionSpellingBox, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          doors = _this$props.doors,
          first = _this$props.first;
      var _this$state = this.state,
          field = _this$state.field,
          door = _this$state.door,
          left = _this$state.left,
          right = _this$state.right;
      var symbolValue = this.getConditionSymbolValue();
      var condition;

      if (symbolValue) {
        var symbol = symbolValue.symbol,
            value = symbolValue.value;
        value = value || '';
        left = left || '';
        right = right || '';
        condition = " ".concat(left).concat(field, " ").concat(symbol).concat(value).concat(right);
        if (!first && door) condition = " ".concat(doors[door]).concat(condition);
      }

      if (this.lastCondition !== condition) {
        this.lastCondition = condition;
        onChange(condition, _objectSpread({}, this.state));
      }
    }
  }, {
    key: "getConditionSymbolValue",
    value: function getConditionSymbolValue() {
      var _this$state2 = this.state,
          symbol = _this$state2.symbol,
          value = _this$state2.value,
          type = _this$state2.type;
      var symbols = this.props.symbols;
      var target = symbols[type][symbol];
      if (!target) return;
      var preprocess = target.preprocess,
          noNeedValue = target.noNeedValue;
      if (noNeedValue) return {
        symbol: target.symbol
      };
      var result = preprocess ? preprocess(value) : value;
      if (value === undefined) return;
      result = type === 'text' ? " '".concat(result, "'") : " ".concat(result);
      return {
        value: result,
        symbol: target.symbol
      };
    }
  }, {
    key: "setStateWithEvent",
    value: function setStateWithEvent(key, e) {
      this.setState(_objectSpread({}, this.state, _defineProperty({}, key, e.target.value)));
    }
  }, {
    key: "getRcsBoxDoor",
    value: function getRcsBoxDoor() {
      var _this$props2 = this.props,
          first = _this$props2.first,
          doors = _this$props2.doors,
          title = _this$props2.title;
      return _react["default"].createElement(_ConditionSpellingBox2["default"], {
        className: "rcs-box-door",
        title: first ? title : null,
        doors: doors,
        onChange: this.setStateWithEvent.bind(this, 'door')
      });
    }
  }, {
    key: "getRcsBoxParentheseLeft",
    value: function getRcsBoxParentheseLeft() {
      var placeholderLeft = this.props.placeholderLeft;
      return _react["default"].createElement(_ConditionSpellingBox4["default"], {
        left: true,
        placeholder: placeholderLeft,
        className: "rcs-box-parenthese rcs-box-left",
        onChange: this.setStateWithEvent.bind(this, 'left')
      });
    }
  }, {
    key: "getRcsBoxField",
    value: function getRcsBoxField() {
      var fields = this.props.fields;
      return _react["default"].createElement(_ConditionSpellingBox["default"], {
        className: "rcs-box-field",
        fields: fields,
        onChange: this.handleChangeField.bind(this)
      });
    }
  }, {
    key: "handleChangeField",
    value: function handleChangeField(e) {
      var fields = this.props.fields;
      var value = this.state.value;
      var field = e.target.value;
      var nextType = fields[field].type || 'text';

      var nextState = _objectSpread({}, this.state, {
        field: field,
        type: nextType
      });

      if (nextType === 'number') {
        var parse = parseFloat(value).toString();
        if (value !== parse) nextState.value = undefined;
      }

      this.setState(nextState);
    }
  }, {
    key: "getRcsBoxSymbol",
    value: function getRcsBoxSymbol() {
      var symbols = this.props.symbols;
      var type = this.state.type;
      return _react["default"].createElement(_ConditionSpellingBox3["default"], {
        className: "rcs-box-symbol",
        type: type,
        symbols: symbols,
        onChange: this.handleChangeSymbol.bind(this)
      });
    }
  }, {
    key: "handleChangeSymbol",
    value: function handleChangeSymbol(e) {
      var symbols = this.props.symbols;
      var type = this.state.type;
      var symbol = e.target.value;
      var noNeedValue = symbols[type][symbol].noNeedValue;
      this.setState(_objectSpread({}, this.state, {
        symbol: symbol,
        noNeedValue: noNeedValue
      }));
    }
  }, {
    key: "getRcsBoxValue",
    value: function getRcsBoxValue() {
      var _this$state3 = this.state,
          type = _this$state3.type,
          noNeedValue = _this$state3.noNeedValue;
      var placeholderInput = this.props.placeholderInput;
      return _react["default"].createElement("input", {
        className: "rcs-box-value",
        disabled: noNeedValue,
        type: type,
        placeholder: placeholderInput,
        onChange: this.setStateWithEvent.bind(this, 'value')
      });
    }
  }, {
    key: "getRcsBoxParentheseRight",
    value: function getRcsBoxParentheseRight() {
      var placeholderRight = this.props.placeholderRight;
      return _react["default"].createElement(_ConditionSpellingBox4["default"], {
        right: true,
        placeholder: placeholderRight,
        className: "rcs-box-parenthese rcs-box-right",
        onChange: this.setStateWithEvent.bind(this, 'right')
      });
    }
  }, {
    key: "getRcsBoxButtons",
    value: function getRcsBoxButtons() {
      var _this$props3 = this.props,
          onAdd = _this$props3.onAdd,
          onDelete = _this$props3.onDelete,
          noInsert = _this$props3.noInsert;
      return _react["default"].createElement("div", {
        className: "rcs-box-buttons"
      }, _react["default"].createElement("i", {
        className: "rcs_iconfont rcs-icon-delete",
        onClick: onDelete
      }), noInsert ? null : _react["default"].createElement("i", {
        className: "rcs_iconfont rcs-icon-insert",
        onClick: onAdd
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      return _react["default"].createElement("div", {
        id: id,
        className: "rcs-box"
      }, this.getRcsBoxDoor(), this.getRcsBoxParentheseLeft(), this.getRcsBoxField(), this.getRcsBoxSymbol(), this.getRcsBoxValue(), this.getRcsBoxParentheseRight(), this.getRcsBoxButtons());
    }
  }]);

  return ConditionSpellingBox;
}(_react.Component);

var _default = ConditionSpellingBox;
exports["default"] = _default;