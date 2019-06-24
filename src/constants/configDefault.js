export default {
    doors: { and: 'AND', or: 'OR' },
    default: { '=': { symbol: '=' }, '≠': { symbol: '<>' } },
    text: {
        dataTypes: ['varchar', 'char', 'text', 'blob', 'boolean'],
        symbols: {
            equal: { symbol: '=' },
            'not equal': { symbol: '<>' },
            like: {
                symbol: 'LIKE',
                preprocess: (value) => `%${value}%`
            },
            'start with': {
                symbol: 'LIKE',
                preprocess: (value) => `${value}%`
            },
            'end with': {
                symbol: 'LIKE',
                preprocess: (value) => `%${value}`
            },
            'is null': { symbol: 'IS NULL', noNeedValue: true },
            'is not null': { symbol: 'IS NOT NULL', noNeedValue: true }
        }
    },
    number: {
        dataTypes: [
            'int',
            'float',
            'double',
            'decimal',
            'int2',
            'int4',
            'int8',
            'numeric'
        ],
        symbols: {
            '=': { symbol: '=' },
            '≠': { symbol: '<>' },
            '<': { symbol: '<' },
            '<=': { symbol: '<=' },
            '>': { symbol: '>' },
            '>=': { symbol: '>=' }
        }
    }
}
