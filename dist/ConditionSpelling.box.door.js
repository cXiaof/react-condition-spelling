"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConditionSpellingBoxDoor = function ConditionSpellingBoxDoor(props) {
  var className = props.className,
      title = props.title,
      doors = props.doors,
      onChange = props.onChange;
  if (title) return _react["default"].createElement("span", {
    className: className
  }, title);
  return _react["default"].createElement("select", {
    className: className,
    onChange: onChange
  }, Object.keys(doors).map(function (key) {
    return _react["default"].createElement("option", {
      key: key,
      value: key
    }, key);
  }));
};

var _default = ConditionSpellingBoxDoor;
exports["default"] = _default;