export default {
    symbols: {
        default: {
            '=': { symbol: '=' },
            '≠': { symbol: '<>' }
        },
        text: {
            '=': { symbol: '=' },
            '≠': { symbol: '<>' },
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
        },
        number: {
            '=': { symbol: '=' },
            '≠': { symbol: '<>' },
            '<': { symbol: '<' },
            '<=': { symbol: '<=' },
            '>': { symbol: '>' },
            '>=': { symbol: '>=' }
        }
    },
    dataTypes: {
        text: ['varchar', 'char', 'text', 'boolean'],
        number: ['int2', 'int4', 'int8', 'numeric']
    },
    doors: { and: 'AND', or: 'OR' },

    title: 'condition: ',
    error: 'No fields!',
    placeholderLeft: '" ( " only',
    placeholderRight: '" ) " only',
    placeholderInput: 'input here'
}
