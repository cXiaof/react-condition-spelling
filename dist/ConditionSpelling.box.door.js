"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ConditionSpellingBoxDoor = function ConditionSpellingBoxDoor(props) {
  var className = props.className,
      title = props.title,
      doors = props.doors,
      onChange = props.onChange;
  if (title) return _react["default"].createElement("div", {
    className: className
  }, title);
  return _react["default"].createElement("select", {
    className: className,
    onChange: onChange
  }, Object.entries(doors).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];

    return _react["default"].createElement("option", {
      key: key,
      value: key
    }, key);
  }));
};

var _default = ConditionSpellingBoxDoor;
exports["default"] = _default;