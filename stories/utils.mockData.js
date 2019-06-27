export const fields = [
    { dataType: 'varchar', fieldName: 'name', name: 'Name' },
    { dataType: 'char', fieldName: 'qr_code', name: 'QR Code' },
    { dataType: 'decimal', fieldName: 'height', name: 'Height' },
    { dataType: 'varchar', fieldName: 'from', name: 'Come From' },
    { dataType: 'int', fieldName: 'status', name: 'Status' }
]

export const config = {
    text: {
        dataTypes: ['varchar', 'char', 'text', 'blob'],
        symbols: {
            equal: { symbol: '=' },
            like: {
                symbol: 'LIKE',
                preprocess: (value) => `%${value}%`
            },
            'is null': { symbol: 'IS NULL', noNeedValue: true }
        }
    },
    number: {
        dataTypes: ['int', 'float', 'double', 'decimal'],
        symbols: { '=': { symbol: '=' }, '≠': { symbol: '<>' } }
    }
}

export const configChZn = {
    doors: { 且: 'AND', 或: 'OR' },
    text: {
        dataTypes: ['varchar', 'char', 'text', 'blob'],
        symbols: {
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
            为null: { symbol: 'IS NULL', noNeedValue: true },
            不为null: { symbol: 'IS NOT NULL', noNeedValue: true }
        }
    },
    number: {
        dataTypes: ['int', 'float', 'double', 'decimal'],
        symbols: {
            等于: { symbol: '=' },
            不等于: { symbol: '<>' },
            小于: { symbol: '<' },
            小于等于: { symbol: '<=' },
            大于: { symbol: '>' },
            大于等于: { symbol: '>=' }
        }
    }
}

export const copyChZn = {
    title: '筛选条件：',
    alwaysTrue: ' 1 = 1',
    waiting: '未做筛选',
    error: '没有字段！',
    placeholderLeft: '仅可输入"("',
    placeholderRight: '仅可输入")"',
    placeholderInput: '请输入。。。'
}

export const onChange = ({ condition, spelling, inputs }) =>
    console.log(condition, spelling, inputs)
