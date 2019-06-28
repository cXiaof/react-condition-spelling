# react-condition-spelling
One React Component for spelling field comparison, through one or more sets of input boxes, into the condition.

## Examples

### [DEMO](https://cxiaof.github.io/react-condition-spelling/storybook-static/index.html)

## Usage

```javascript
import ConditionSpelling from 'react-condition-spelling'

<ConditionSpelling
    config={config} // or use default without custom config
    copy={copy} // or use default without custom copy
    fields={fields}
    onChange={(result) => {
        const { condition, spelling, inputs } = result
        console.log(condition)
        console.log(spelling)
        console.log(inputs)
    }}
/>
```

## Getting Started

-   **install dependencies**

```
yarn install
```

-   **serve with hot reload at localhost:6006**

```
yarn storybook
||
yarn s
```

-   **build component**

```
yarn build
||
yarn b
```

-   **build storybook**

```
yarn build-storybook
||
yarn bs
```

## Props

-   fields **Array**  
    field item with fieldName,dataType(both defined in database) and a name(which show as option in select) like [{fieldName: 'field_name', dataType: 'varchar', name: 'text in input'}]
    每一项字段需要包括数据库中定义的字段名和字段类型，和一个名称用于被显示在select里，如[{fieldName: '字段名', dataType: '字段类型', name: '显示的文字'}]
    - e.g `{ dataType: 'varchar', fieldName: 'qr_code', name: 'QR Code' }`
    or `{ dataType: 'numeric', fieldName: 'zip_code', name: 'Zip Code' }`

-   config **Object**  
    1. doors **Object**  
        sql doors like { and: 'AND' }
        sql的逻辑门，形似{ 且: 'AND' }
        - e.g `{ and: 'AND' }`
        or `{ or: 'OR' }`

    2. [types] **Object** //type must be one \<input\> type  
        - dataTypes **Array**  
            - which dataTypes use this type input
            定义哪些dataType使用这一type的input
            - e.g `dataTypes: ['varchar', 'char', 'text', 'blob']`
            or `dataTypes: ['int', 'float', 'double', 'decimal']`
        - symbols **Object**  
            which symbols to use for this type, like { 'symbol text': { symbol: 'sql symbol' } } or { 'symbol text': { symbol: 'sql symbol' , preprocess: preprocessFunction} } 
            定义每一个type使用哪些符号，如 { '显示的符号': { symbol: 'sql符号' } } 或 { '显示的符号': { symbol: 'sql符号' , preprocess: 预处理函数} }
            - e.g `{ default: { 'equal': { symbol: '=' }, number: { 'not equal': { symbol: '<>' } } }`
            or `{ default: { '=': { symbol: '<>' } }, text: { like: { symbol: 'LIKE', preprocess: (value) => '%${value}%' } } }`

    3. default **Object**  
        like symbols in every [types], be used when no dataType of field is matched.
        作用等同[types]中的symbols，在字段数据类型没有匹配到任何定义的类型时使用

-   copy **Object**  
    - title **String**
        text at first grid in first line
        首行的开头显示的文字
        default is `'condition: '`
    - alwaysTrue **String**
        sql condition always be true
        总是为true的sql condition
        default is `' 1 = 1'`
    - waiting **String**
        spelling text initial
        拼成的语句的初始值
        default is `'No screening'`
    - error **String**
        text when no field in props
        当props里没有字段时显示的文字
        default is `'No fields!'`
    - placeholderLeft **String**
        placeholder for left input every line
        每行左括号输入框的
        default is `'" ( " only'placeholder`
    - placeholderRight **String**
        placeholder for right input every line
        每行右括号输入框的
        default is `'" ) " only'placeholder`
    - placeholderInput **String**
        placeholder for value input every line
        每行值输入框的placeholder
        default is `'input here'`

-   max **Number**  
    how much lines be shown at most
    定义最多可以出现几行

-   showAll **Boolean**  
    whether all lines always be be shown or not **work only if has prop: max**
    是否总是显示所有行 **仅在有prop: max时有效**

-   onChange **Funtion**  
    callback when spelling sql, get an Object attr includes `condition`, `spelling` and `inputs`
    每当拼写出sql语句时的回调，接收一个对象包含`condition`, `spelling` and `inputs`
    - condition **String**  
        effective spelling sql
        拼写出的有效sql
    - spelling **String**  
        spelling text
        拼写出的文字
    - inputs **Array**  
        every line Object item Array
        每一行的对象数组

-   onLoad **Funtion**  
    callback when component did mount, get two attr `condition`, `spelling`
    组件mount后的回调，接收两个参数包含`condition`, `spelling`
    - condition **String**  
        effective spelling sql
        拼写出的有效sql
    - spelling **String**  
        spelling text
        拼写出的文字

-   bindClearAll **Funtion**  
    get the clearAll function to bind your clear function, like `bindClearAll={(clear) => (this.clearAll = clear)}` and use `this.clearAll()` to clear
    获取clearAll方法，可以绑定到你自己的方法上，如`bindClearAll={(clear) => (this.clearAll = clear)}`绑定到你的this.clearAll方法上做清空操作
