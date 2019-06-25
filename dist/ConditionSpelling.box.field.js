"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConditionSpellingBoxField = function ConditionSpellingBoxField(_ref) {
  var className = _ref.className,
      fields = _ref.fields,
      onChange = _ref.onChange;
  return _react["default"].createElement("select", {
    className: className,
    onChange: onChange
  }, Object.keys(fields).map(function (key) {
    return _react["default"].createElement("option", {
      key: key,
      value: key
    }, key);
  }));
};

var _default = ConditionSpellingBoxField;
exports["default"] = _default;