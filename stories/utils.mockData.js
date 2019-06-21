export const fields = [
    { dataType: 'varchar', fieldName: 'name', name: 'Name' },
    { dataType: 'varchar', fieldName: 'qr_code', name: 'QR Code' },
    { dataType: 'numeric', fieldName: 'height', name: 'Height' },
    { dataType: 'varchar', fieldName: 'from', name: 'Come From' },
    { dataType: 'int4', fieldName: 'status', name: 'Status' }
]

export const config = {
    symbols: {
        text: {
            '=': { symbol: '=' },
            like: { symbol: 'LIKE', preprocess: (value) => `%${value}%` },
            'is null': { symbol: 'IS NULL', noNeedValue: true }
        },
        number: { '=': { symbol: '=' }, '≠': { symbol: '<>' } }
    }
}

export const configChZn = {
    symbols: {
        text: {
            等于: { symbol: '=' },
            不等于: { symbol: '<>' },
            包含: {
                symbol: 'LIKE',
                preprocess: (value) => `%${value}%`
            },
            开始于: {
                symbol: 'LIKE',
                preprocess: (value) => `${value}%`
            },
            结束于: {
                symbol: 'LIKE',
                preprocess: (value) => `%${value}`
            },
            为null: { symbol: 'IS NULL', noNeedValue: true }
        },
        number: { '=': { symbol: '=' }, '≠': { symbol: '<>' } }
    }
}

export const onChange = (condition, inputs) => {
    console.log(condition)
    console.log(inputs)
}
