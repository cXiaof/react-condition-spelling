# react-condition-spelling
One React Component for spelling field comparison, through one or more sets of input boxes, into the condition.

## Examples

### [DEMO](https://cxiaof.github.io/react-condition-spelling/storybook-static/index.html)

## Usage

```javascript
import ConditionSpelling from 'react-condition-spelling'

<ConditionSpelling
    config={config}
    fields={fields}
    onChange={(condition, inputs) => {
        console.log(condition)
        console.log(inputs)
    }}
/>
```

## Develop

The only source file is `src/index.js`. It is written in ES6, transpiled by [babel](https://babeljs.io/).

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

-   **build for storybook with minification**

```
yarn build-storybook
||
yarn b
```

## Props

-   fields **Object**
    - fields with field name as key and value includes name(which show as option in select) and type(which be uesd to find symbol in config) like { fieldName: { name: 'text in input', type: 'key to find symbols in config' } }
    以字段名作为key，值包含被显示在select里的name和被用于在config里找symbol的type，如{ 字段名: { name: '显示的文字', type: '在config里找symbol的key' } }
    e.g `{ from: { name: 'come from', type: 'text' } }`
    or `{ zip_code: { name: 'Zip code', type: 'number' } }`

-   config **Object**
    - includes `symbols` `doors`and other `text config`
    包含 `symbols` `doors`和其他`文字类config`
        1. symbols **Object**
            every type as key and value like { 'symbol text': { symbol: 'sql symbol' } } or { 'symbol text': { symbol: 'sql symbol' , preprocess: preprocessFunction} } 
            - 定义每一个type，值为 { '显示的符号': { symbol: 'sql的符号' } } 或 { '显示的符号': { symbol: 'sql的符号' , preprocess: 预处理函数} }
            - e.g `{ number: { '≠': { symbol: '<>' } } }`
            or `{ text: { like: { symbol: 'LIKE', preprocess: (value) => '%${value}%' } } }`

        2. doors **Object**
            sql doors like { and: 'AND' }
            - sql的逻辑门如{ 且: 'AND' }
            - e.g `{ and: 'AND' }`
            or `{ or: 'OR' }`

        3. other text config
            - title **String**
                text at first grid in first line
                首行的开头显示的文字
            - error **String**
                text when no field in props
                当props里没有字段时显示的文字
            - placeholderLeft **String**
                placeholder for left input every line
                每行左括号输入框的placeholder
            - placeholderRight **String**
                placeholder for right input every line
                每行右括号输入框的placeholder
            - placeholderInput **String**
                placeholder for value input every line
                每行值输入框的placeholder

-   max **Number**
    - how much lines be shown at most
    定义最多可以出现几行

-   onChange **Funtion**  
    - callback when spelling effective sql, get two attr `condition` and `inputs`
    每当拼写出有效的sql语句时的回调，接收两个参数`condition`和`inputs`
        - condition **String**
            effective spelling sql
            拼写出的有效sql
        - inputs **Array**
            every line Object item Array
            每一行的对象数组
