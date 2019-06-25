"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  doors: {
    and: 'AND',
    or: 'OR'
  },
  "default": {
    '=': {
      symbol: '='
    },
    '≠': {
      symbol: '<>'
    }
  },
  text: {
    dataTypes: ['varchar', 'char', 'text', 'blob', 'boolean'],
    symbols: {
      equal: {
        symbol: '='
      },
      'not equal': {
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
    }
  },
  number: {
    dataTypes: ['int', 'float', 'double', 'decimal', 'int2', 'int4', 'int8', 'numeric'],
    symbols: {
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
  }
};
exports["default"] = _default;