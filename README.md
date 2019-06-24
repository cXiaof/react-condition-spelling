# react-condition-spelling
One React Component for spelling field comparison, through one or more sets of input boxes, into the condition.

## Examples

### [DEMO](https://cxiaof.github.io/react-condition-spelling/storybook-static/index.html)

## Usage

```javascript
import ConditionSpelling from 'react-condition-spelling'

<ConditionSpelling
    config={config} // or use default without custom config
    fields={fields}
    onChange={(condition, inputs) => {
        console.log(condition)
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
    - 每一项字段需要包括数据库中定义的字段名和字段类型，和一个名称用于被显示在select里，如[{fieldName: '字段名', dataType: '字段类型', name: '显示的文字'}]
    - e.g `{ dataType: 'varchar', fieldName: 'qr_code', name: 'QR Code' }`
    or `{ dataType: 'numeric', fieldName: 'zip_code', name: 'Zip Code' }`

-   config **Object**  
    includes `symbols` `dataTypes` `doors` and other `text config`
    - 包含 `symbols` `dataTypes` `doors` 和其他`文字类config`
        1. symbols **Array**  
            every type as key and value like { 'symbol text': { symbol: 'sql symbol' } } or { 'symbol text': { symbol: 'sql symbol' , preprocess: preprocessFunction} } 
            key **default** be used when no dataType of field is matched.
            - 定义每一个type，值为 { '显示的符号': { symbol: 'sql符号' } } 或 { '显示的符号': { symbol: 'sql符号' , preprocess: 预处理函数} }
            定义 **default** key 在字段数据类型没有匹配到任何定义的类型时使用
            - e.g `{ default: { 'equal': { symbol: '=' }, number: { 'not equal': { symbol: '<>' } } }`
            or `{ default: { '=': { symbol: '<>' } }, text: { like: { symbol: 'LIKE', preprocess: (value) => '%${value}%' } } }`

        2. dataTypes **Object**  
            dataTypes which every type of symbols keys includes
            - symbols里每个类型包含哪些数据类型
            - e.g `text: ['varchar', 'char', 'text', 'boolean']`
            or `number: ['int2', 'int4', 'int8', 'numeric']`

        3. doors **Object**  
            sql doors like { and: 'AND' }
            - sql的逻辑门如{ 且: 'AND' }
            - e.g `{ and: 'AND' }`
            or `{ or: 'OR' }`

        4. other text config
            - title **String**
                text at first grid in first line 首行的开头显示的文字
            - error **String**
                text when no field in props 当props里没有字段时显示的文字
            - placeholderLeft **String**
                placeholder for left input every line 每行左括号输入框的placeholder
            - placeholderRight **String**
                placeholder for right input every line 每行右括号输入框的placeholder
            - placeholderInput **String**
                placeholder for value input every line 每行值输入框的placeholder

-   max **Number**  
    how much lines be shown at most
    - 定义最多可以出现几行

-   showAll **Boolean**  
    whether all lines always be be shown or not **work only if has prop: max**
    - 是否总是显示所有行 **仅在有prop: max时有效**

-   onChange **Funtion**  
    callback when spelling effective sql, get two attr `condition` and `inputs`
    - 每当拼写出有效的sql语句时的回调，接收两个参数`condition`和`inputs`
        - condition **String**
            effective spelling sql 拼写出的有效sql
        - inputs **Array**
            every line Object item Array 每一行的对象数组
