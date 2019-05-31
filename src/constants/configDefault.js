export default {
    symbols: {
        '=': { symbol: '=' },
        '≠': { symbol: '<>' },
        '<': { symbol: '<' },
        '<=': { symbol: '<=' },
        '>': { symbol: '>' },
        '>=': { symbol: '>=' },
        like: { symbol: 'LIKE', preprocess: (value) => `%${value}%` },
        'is null': { symbol: 'IS NULL', preprocess: () => null },
        'is not null': { symbol: 'IS NOT NULL', preprocess: () => null },
        'start with': { symbol: 'LIKE', preprocess: (value) => `${value}%` },
        'end with': { symbol: 'LIKE', preprocess: (value) => `%${value}` }
    },
    doors: {
        and: 'AND',
        or: 'OR'
    },
    tip: 'condition: '
}
