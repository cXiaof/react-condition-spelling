"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _uuid = _interopRequireDefault(require("uuid"));

var _configDefault = _interopRequireDefault(require("./constants/configDefault"));

var _ConditionSpelling = _interopRequireDefault(require("./ConditionSpelling.box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var ConditionSpelling =
/*#__PURE__*/
function (_Component) {
  _inherits(ConditionSpelling, _Component);

  function ConditionSpelling(props) {
    var _this;

    _classCallCheck(this, ConditionSpelling);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConditionSpelling).call(this, props));
    _this.alwaysTrue = ' 1 = 1';
    var max = Math.max(~~props.max, 0) || Infinity;
    var showAll = props.showAll && props.max !== undefined && max !== Infinity;

    var config = _this.getConfig(props.config);

    var fields = _this.getFiedls(props.fields, config.dataTypes);

    var value = _this.getInitValue(max, showAll);

    var result = _this.alwaysTrue;
    _this.state = {
      max: max,
      showAll: showAll,
      config: config,
      fields: fields,
      value: value,
      result: result
    };
    return _this;
  }

  _createClass(ConditionSpelling, [{
    key: "getInitValue",
    value: function getInitValue(max, showAll) {
      if (!showAll) return [this.getOneItemWithUid()];
      var arr = [];

      for (var i = 0; i < max; i++) {
        arr.push(this.getOneItemWithUid());
      }

      return arr;
    }
  }, {
    key: "getFiedls",
    value: function getFiedls(fields) {
      var dataTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!Array.isArray(fields) || fields.length === 0) return {};
      return fields.reduce(function (result, field) {
        var fieldName = field.fieldName,
            dataType = field.dataType,
            name = field.name;
        result[fieldName] = Object.entries(dataTypes).reduce(function (target, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              types = _ref2[1];

          if (types.includes(dataType)) target.type = key;
          return target;
        }, {
          name: name,
          type: 'default'
        });
        return result;
      }, {});
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        symbols: config.symbols || _configDefault["default"].symbols,
        dataTypes: config.dataTypes || _configDefault["default"].dataTypes,
        doors: config.doors || _configDefault["default"].doors,
        title: config.title !== undefined ? config.title : _configDefault["default"].title,
        error: config.error !== undefined ? config.error : _configDefault["default"].error,
        placeholderLeft: config.placeholderLeft !== undefined ? config.placeholderLeft : _configDefault["default"].placeholderLeft,
        placeholderRight: config.placeholderRight !== undefined ? config.placeholderRight : _configDefault["default"].placeholderRight,
        placeholderInput: config.placeholderInput !== undefined ? config.placeholderInput : _configDefault["default"].placeholderInput
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps, preState) {
      var onChange = this.props.onChange;
      var _this$state = this.state,
          result = _this$state.result,
          value = _this$state.value;
      if (onChange && result !== preState.result) onChange(result || this.alwaysTrue, value);
    }
  }, {
    key: "getOneItemWithUid",
    value: function getOneItemWithUid() {
      return {
        id: _uuid["default"].v1().toString()
      };
    }
  }, {
    key: "getResult",
    value: function getResult(value) {
      return value.reduce(function (target, _ref3) {
        var condition = _ref3.condition;
        return "".concat(target).concat(condition || '');
      }, '');
    }
  }, {
    key: "handleBoxChange",
    value: function handleBoxChange(i, condition, data) {
      var value = _toConsumableArray(this.state.value);

      value[i] = _objectSpread({}, value[i], {
        condition: condition,
        data: data,
        illegal: condition === undefined
      });
      var result = this.getResult(value);
      this.setState(_objectSpread({}, this.state, {
        value: value,
        result: result
      }));
    }
  }, {
    key: "handleInsert",
    value: function handleInsert(index) {
      var _this$state2 = this.state,
          value = _this$state2.value,
          max = _this$state2.max;
      if (value.length === max) return;
      value.splice(index + 1, 0, this.getOneItemWithUid());
      this.setState(_objectSpread({}, this.state, {
        value: value
      }));
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(index) {
      var _this$state3 = this.state,
          max = _this$state3.max,
          showAll = _this$state3.showAll;

      var value = _toConsumableArray(this.state.value);

      value.splice(index, 1);
      if (value.length === 0) value = [this.getOneItemWithUid()];
      if (showAll) for (var _index = 0; _index < max - value.length; _index++) {
        value.push(this.getOneItemWithUid());
      }
      var result = this.getResult(value);
      this.setState(_objectSpread({}, this.state, {
        value: value,
        result: result
      }));
    }
  }, {
    key: "getRcsBoxes",
    value: function getRcsBoxes() {
      var _this2 = this;

      var _this$state4 = this.state,
          showAll = _this$state4.showAll,
          max = _this$state4.max,
          config = _this$state4.config,
          fields = _this$state4.fields,
          value = _this$state4.value;
      return value.map(function (_ref4, index) {
        var id = _ref4.id;
        return _react["default"].createElement(_ConditionSpelling["default"], _extends({
          key: id,
          id: id,
          first: index === 0,
          noInsert: showAll || max === value.length,
          fields: fields,
          onChange: _this2.handleBoxChange.bind(_this2, index),
          onAdd: _this2.handleInsert.bind(_this2, index),
          onDelete: _this2.handleDelete.bind(_this2, index)
        }, config));
      });
    }
  }, {
    key: "getRcsBody",
    value: function getRcsBody() {
      var _this$state5 = this.state,
          fields = _this$state5.fields,
          config = _this$state5.config;
      if (Object.keys(fields).length === 0) return config.error;
      return this.getRcsBoxes();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "react-condition-spelling"
      }, this.getRcsBody());
    }
  }]);

  return ConditionSpelling;
}(_react.Component);

var _default = ConditionSpelling;
exports["default"] = _default;