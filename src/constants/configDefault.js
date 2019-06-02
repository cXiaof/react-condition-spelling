export default {
    symbols: {
        text: {
            like: { symbol: 'LIKE', preprocess: (value) => `%${value}%` },
            'is null': { symbol: 'IS NULL', preprocess: () => null },
            'is not null': { symbol: 'IS NOT NULL', preprocess: () => null },
            'start with': {
                symbol: 'LIKE',
                preprocess: (value) => `${value}%`
            },
            'end with': { symbol: 'LIKE', preprocess: (value) => `%${value}` }
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
    doors: { and: 'AND', or: 'OR' },
    tip: 'condition: ',
    error: 'No fields!'
}
