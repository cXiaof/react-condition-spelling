"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
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
exports["default"] = _default;