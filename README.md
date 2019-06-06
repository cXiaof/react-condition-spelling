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
    - e.g `{ from: { name: 'come from', type: 'text' } }`
    or `{ zip_code: { name: 'Zip code', type: 'number' } }`
-   config **Object**  
-   onChange **Funtion**  
