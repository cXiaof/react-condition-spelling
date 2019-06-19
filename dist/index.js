'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var uuid = _interopDefault(require('uuid'));
var es6Shim = require('es6-shim');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@import url(c:\\Users\\DELL\\Documents\\www\\react-condition-spelling\\src\\stylesheets\\iconfont\\iconfont.css);.react-condition-spelling .rcs-box>*{box-sizing:border-box;height:calc(1.2rem + 4px);padding:0 .5rem;vertical-align:middle}.react-condition-spelling .rcs-box .rcs-box-door,.react-condition-spelling .rcs-box .rcs-box-parenthese{width:10%}.react-condition-spelling .rcs-box .rcs-box-field,.react-condition-spelling .rcs-box .rcs-box-symbol{width:20%}.react-condition-spelling .rcs-box .rcs-box-value{width:25%}.react-condition-spelling .rcs-box .rcs-box-buttons{width:5%;display:inline-flex;align-items:center;justify-content:space-around}.react-condition-spelling .rcs-box .rcs-box-buttons i{font-size:1rem;margin:0 2px}.react-condition-spelling .rcs-box div.rcs-box-door{display:inline-block;overflow:hidden;text-overflow:ellipsis;padding:0}";
styleInject(css);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var configDefault = {
  symbols: {
    text: {
      '=': {
        symbol: '='
      },
      '≠': {
        symbol: '<>'
      },
      like: {
        symbol: 'LIKE',
        preprocess: function preprocess(value) {
          return "%".concat(value, "%");
        }
      },
      'start with': {
        symbol: 'LIKE',
        preprocess: function preprocess(value) {
          return "".concat(value, "%");
        }
      },
      'end with': {
        symbol: 'LIKE',
        preprocess: function preprocess(value) {
          return "%".concat(value);
        }
      },
      'is null': {
        symbol: 'IS NULL',
        noNeedValue: true
      },
      'is not null': {
        symbol: 'IS NOT NULL',
        noNeedValue: true
      }
    },
    number: {
      '=': {
        symbol: '='
      },
      '≠': {
        symbol: '<>'
      },
      '<': {
        symbol: '<'
      },
      '<=': {
        symbol: '<='
      },
      '>': {
        symbol: '>'
      },
      '>=': {
        symbol: '>='
      }
    }
  },
  doors: {
    and: 'AND',
    or: 'OR'
  },
  title: 'condition: ',
  error: 'No fields!',
  placeholderLeft: '" ( " only',
  placeholderRight: '" ) " only',
  placeholderInput: 'input here'
};

var ConditionSpellingBoxField = function ConditionSpellingBoxField(_ref) {
  var className = _ref.className,
      fields = _ref.fields,
      onChange = _ref.onChange;
  return React__default.createElement("select", {
    className: className,
    onChange: onChange
  }, Object.entries(fields).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        name = _ref3[1].name;

    return React__default.createElement("option", {
      key: key,
      value: key
    }, name);
  }));
};

var ConditionSpellingBoxDoor = function ConditionSpellingBoxDoor(props) {
  var className = props.className,
      title = props.title,
      doors = props.doors,
      onChange = props.onChange;
  if (title) return React__default.createElement("div", {
    className: className
  }, title);
  return React__default.createElement("select", {
    className: className,
    onChange: onChange
  }, Object.entries(doors).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];

    return React__default.createElement("option", {
      key: key,
      value: key
    }, key);
  }));
};

var ConditionSpellingBoxSymbol =
/*#__PURE__*/
function (_Component) {
  _inherits(ConditionSpellingBoxSymbol, _Component);

  function ConditionSpellingBoxSymbol() {
    _classCallCheck(this, ConditionSpellingBoxSymbol);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConditionSpellingBoxSymbol).apply(this, arguments));
  }

  _createClass(ConditionSpellingBoxSymbol, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          type = _this$props.type,
          symbols = _this$props.symbols,
          onChange = _this$props.onChange;

      if (type !== prevProps.type) {
        var value = Object.keys(symbols[type])[0];
        onChange({
          target: {
            value: value
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          type = _this$props2.type,
          symbols = _this$props2.symbols,
          onChange = _this$props2.onChange;
      return React__default.createElement("select", {
        className: className,
        onChange: onChange
      }, Object.entries(symbols[type]).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            key = _ref2[0];

        return React__default.createElement("option", {
          key: key,
          value: key
        }, key);
      }));
    }
  }]);

  return ConditionSpellingBoxSymbol;
}(React.Component);

var ConditionSpellingBoxParenthese =
/*#__PURE__*/
function (_Component) {
  _inherits(ConditionSpellingBoxParenthese, _Component);

  function ConditionSpellingBoxParenthese(props) {
    var _this;

    _classCallCheck(this, ConditionSpellingBoxParenthese);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConditionSpellingBoxParenthese).call(this, props));
    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(ConditionSpellingBoxParenthese, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _this$props = this.props,
          left = _this$props.left,
          right = _this$props.right;
      if (e.target.value === '') this.updateValueFireChange('');
      var match = [];
      var matchLeft = e.target.value.match(/\(/g);
      var matchRight = e.target.value.match(/\)/g);
      if (left && matchLeft) match = [].concat(_toConsumableArray(match), _toConsumableArray(matchLeft));
      if (right && matchRight) match = [].concat(_toConsumableArray(match), _toConsumableArray(matchRight));
      if (match.length > 0) this.updateValueFireChange(match.join(''));
    }
  }, {
    key: "updateValueFireChange",
    value: function updateValueFireChange(value) {
      var onChange = this.props.onChange;
      this.setState(_objectSpread({}, this.state, {
        value: value
      }));
      onChange({
        target: {
          value: value
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          placeholder = _this$props2.placeholder;
      var value = this.state.value;
      return React__default.createElement("input", {
        value: value,
        className: className,
        placeholder: placeholder,
        onChange: this.handleChange.bind(this)
      });
    }
  }]);

  return ConditionSpellingBoxParenthese;
}(React.Component);

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

    var _Object$entries$ = _slicedToArray(es6Shim.Object.entries(fields)[0], 2),
        field = _Object$entries$[0],
        type = _Object$entries$[1].type;

    var _Object$entries$2 = _slicedToArray(es6Shim.Object.entries(symbols[type])[0], 2),
        symbol = _Object$entries$2[0],
        noNeedValue = _Object$entries$2[1].noNeedValue;

    var initState = {
      field: field,
      type: type,
      symbol: symbol,
      noNeedValue: noNeedValue
    };
    initState.door = es6Shim.Object.keys(doors)[0];
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
      return React__default.createElement(ConditionSpellingBoxDoor, {
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
      return React__default.createElement(ConditionSpellingBoxParenthese, {
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
      return React__default.createElement(ConditionSpellingBoxField, {
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
      return React__default.createElement(ConditionSpellingBoxSymbol, {
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
      return React__default.createElement("input", {
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
      return React__default.createElement(ConditionSpellingBoxParenthese, {
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
      return React__default.createElement("div", {
        className: "rcs-box-buttons"
      }, React__default.createElement("i", {
        className: "iconfont icon-delete",
        onClick: onDelete
      }), noInsert ? null : React__default.createElement("i", {
        className: "iconfont icon-insert",
        onClick: onAdd
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      return React__default.createElement("div", {
        id: id,
        className: "rcs-box"
      }, this.getRcsBoxDoor(), this.getRcsBoxParentheseLeft(), this.getRcsBoxField(), this.getRcsBoxSymbol(), this.getRcsBoxValue(), this.getRcsBoxParentheseRight(), this.getRcsBoxButtons());
    }
  }]);

  return ConditionSpellingBox;
}(React.Component);

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

    var config = _this.getConfig(props.config || {});

    var fields = props.fields || {};
    var result = _this.alwaysTrue;

    var value = _this.getInitValue(max, showAll);

    _this.state = {
      max: max,
      showAll: showAll,
      config: config,
      fields: fields,
      result: result,
      value: value
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
    key: "getConfig",
    value: function getConfig(config) {
      return {
        symbols: config.symbols || configDefault.symbols,
        doors: config.doors || configDefault.doors,
        title: config.title !== undefined ? config.title : configDefault.title,
        error: config.error !== undefined ? config.error : configDefault.error,
        placeholderLeft: config.placeholderLeft !== undefined ? config.placeholderLeft : configDefault.placeholderLeft,
        placeholderRight: config.placeholderRight !== undefined ? config.placeholderRight : configDefault.placeholderRight,
        placeholderInput: config.placeholderInput !== undefined ? config.placeholderInput : configDefault.placeholderInput
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps, preState) {
      var onChange = this.props.onChange;
      var _this$state = this.state,
          result = _this$state.result,
          value = _this$state.value;
      if (result !== preState.result) onChange(result || this.alwaysTrue, value);
    }
  }, {
    key: "getOneItemWithUid",
    value: function getOneItemWithUid() {
      return {
        id: uuid.v1().toString()
      };
    }
  }, {
    key: "getResult",
    value: function getResult(value) {
      return value.reduce(function (target, _ref) {
        var condition = _ref.condition;
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
      return value.map(function (_ref2, index) {
        var id = _ref2.id;
        return React__default.createElement(ConditionSpellingBox, _extends({
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
      return React__default.createElement("div", {
        className: "react-condition-spelling"
      }, this.getRcsBody());
    }
  }]);

  return ConditionSpelling;
}(React.Component);

module.exports = ConditionSpelling;
